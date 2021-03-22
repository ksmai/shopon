import Link from './link.interface';

type Child = Link | LinkGroup;

export default interface LinkGroup {
  name: string;
  children: Child[];
}
