/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
// Algorithm 1: Iterative Breadth First Search
const findTarget = (root, k) => {
	const prevValues = new Set();
	const nodesToVisit = [root];

	while (nodesToVisit.length > 0) {
		const currentNode = nodesToVisit.pop();

		if (prevValues.has(k - currentNode.val)) return true;
		prevValues.add(currentNode.val);

		if (currentNode.left) nodesToVisit.unshift(currentNode.left);
		if (currentNode.right) nodesToVisit.unshift(currentNode.right);
	}

	return false;
};

// Algorithm 2: Recursive Depth First Search (DFS)
const findTargetDfs = (root, k) => {
	const prevValues = new Set();

	const dfs = (node) => {
		if (!node) return false;
		if (prevValues.has(k - node.val)) return true;
		prevValues.add(node.val);
		return dfs(node.left) || dfs(node.right);
	};

	return dfs(root);
};