import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import './mock-next-link';
import SideNavList from './side-nav-list';
import Link from './link.interface';
import NavItem from './nav-item.interface';

interface TwoLevelLink {
  name: string;
  children: [Link];
}

interface ThreeLevelLink {
  name: string;
  children: [TwoLevelLink];
}

describe('SideNavList', () => {
  let onClick: () => void;
  let oneLevelLink: Link;
  let twoLevelLink: TwoLevelLink;
  let twoLevelLink2: Link;
  let threeLevelLink: ThreeLevelLink;
  let threeLevelLink2: TwoLevelLink;
  let threeLevelLink3: Link;
  let navItems: NavItem[];

  beforeEach(() => {
    onClick = jest.fn<void, []>();
    oneLevelLink = { name: 'oneLevelLink', href: '/one-level-link' };
    twoLevelLink2 = { name: 'twoLevelLink2', href: '/two-level-link-2' };
    twoLevelLink = {
      name: 'twoLevelLink',
      children: [twoLevelLink2],
    };
    threeLevelLink3 = { name: 'threeLevelLink3', href: '/three-level-link-3' };
    threeLevelLink2 = {
      name: 'threeLevelLink2',
      children: [threeLevelLink3],
    };
    threeLevelLink = {
      name: 'threeLevelLink',
      children: [threeLevelLink2],
    };

    navItems = [oneLevelLink, twoLevelLink, threeLevelLink];
  });

  beforeEach(() => {
    render(<SideNavList onClick={onClick} navItems={navItems} />);
  });

  it('should render one level nav item', () => {
    const navItem = screen.getByText(oneLevelLink.name);
    expect(navItem.closest('a')).toHaveAttribute('href', oneLevelLink.href);
  });

  it('should expand two level nav item on click', async () => {
    const firstLevel = screen.getByText(twoLevelLink.name);
    let secondLevel = screen.queryByText(twoLevelLink2.name);
    expect(secondLevel).toBeNull();
    fireEvent.click(firstLevel);
    secondLevel = await screen.findByText(twoLevelLink2.name);
    expect(secondLevel.closest('a')).toHaveAttribute(
      'href',
      twoLevelLink2.href
    );
  });

  it('should expand three level nav item on click', async () => {
    const firstLevel = screen.getByText(threeLevelLink.name);

    let secondLevel = screen.queryByText(threeLevelLink2.name);
    expect(secondLevel).toBeNull();
    fireEvent.click(firstLevel);
    secondLevel = await screen.findByText(threeLevelLink2.name);

    let thirdLevel = screen.queryByText(threeLevelLink3.name);
    expect(thirdLevel).toBeNull();
    fireEvent.click(secondLevel);
    thirdLevel = await screen.findByText(threeLevelLink3.name);

    expect(thirdLevel.closest('a')).toHaveAttribute(
      'href',
      threeLevelLink3.href
    );
  });

  it('should call onClick when a link is clicked', () => {
    const link = screen.getByText(oneLevelLink.name);
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
