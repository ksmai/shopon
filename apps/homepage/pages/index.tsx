import { IndexPage } from '@shopon/homepage/index-page';

export default IndexPage;

// generate some fake nav items
function getNavItem(i: number) {
  return {
    name: `Lorem ${i}`,
    children: [
      {
        name: `Ipsum dolor sit ${i}`,
        href: `/ipsum-dolor-sit-${i}`,
      },
      {
        name: `Amet ${i}`,
        children: [
          {
            name: `Felis leo et ${i}`,
            href: `felis-leo-et-${i}`,
          },
        ],
      },
      {
        name: `Consectetur adipiscing ${i}`,
        children: [
          {
            name: `Condimentum erat ${i}`,
            href: `condimentum-erat-${i}`,
          },
          {
            name: `Cursus at aenean ${i}`,
            href: `cursus-at-aenean-${i}`,
          },
        ],
      },
      {
        name: `Elit morbi tincidunt ${i}`,
        children: [
          {
            name: `Suscipit ex ${i}`,
            href: `suscipit-ex-${i}`,
          },
          {
            name: `Non purus dictum ${i}`,
            href: `non-purus-dictum-${i}`,
          },
        ],
      },
    ],
  };
}

export function getStaticProps() {
  return {
    props: {
      navItems: Array(9)
        .fill(null)
        .map((_, i) => getNavItem(i)),
    },
  };
}
