import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import './mock-next-link';
import SideNavGroup from './side-nav-group';
import LinkGroup from './link-group.interface';
import Link from './link.interface';

describe('SideNavGroup', () => {
  let childLink: Link;
  let childGroupLink: Link;
  let childGroup: LinkGroup;
  let group: LinkGroup;
  let onClick: () => void;

  beforeEach(() => {
    childLink = { name: 'child link', href: '/child-link' };
    childGroupLink = { name: 'child group link', href: '/child-group-link' };
    childGroup = { name: 'child group', children: [childGroupLink] };
    group = { name: 'group', children: [childGroup, childLink] };
    onClick = jest.fn<undefined, []>();
    render(<SideNavGroup group={group} onClick={onClick} />);
  });

  describe('when closed by default', () => {
    it('should render name of the group', () => {
      screen.getByText(group.name);
    });

    it('should not render name of children', () => {
      const childGroupName = screen.queryByText(childGroup.name);
      expect(childGroupName).toBeNull();

      const childLinkName = screen.queryByText(childLink.name);
      expect(childLinkName).toBeNull();
    });
  });

  describe('when clicked to open', () => {
    beforeEach(() => {
      const name = screen.getByText(group.name);
      fireEvent.click(name);
    });

    it('should render names of children', () => {
      screen.getByText(childGroup.name);
      screen.getByText(childLink.name);
    });

    it('should call onClick when child link is clicked', () => {
      const link = screen.getByText(childLink.name);
      fireEvent.click(link);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should recursively open child group', () => {
      const childGroupName = screen.getByText(childGroup.name);
      fireEvent.click(childGroupName);
      screen.getByText(childGroupLink.name);
    });
  });
});
