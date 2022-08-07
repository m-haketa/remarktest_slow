import { visit } from 'unist-util-visit';

const myRemarkPlugin: import('unified').Plugin<[], import('mdast').Root> = () => (tree) => {
  visit(tree, (node) => {
    //node. <- slow
  });
};