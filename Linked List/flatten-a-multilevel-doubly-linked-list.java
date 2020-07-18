/*
https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
// Definition for a Node.
class Node {
    public int val;
    public Node prev;
    public Node next;
    public Node child;
};
*/
class Solution {
    public Node flatten(Node head) {
        if(head == null) return null;
        Node utc = utility(head);
        System.out.println("new");
        while(utc.next != null){
           System.out.print(utc.val+" f ");
           utc = utc.next;
        }
       System.out.println("====");
        while(utc.prev != null){
           System.out.print(utc.val + " b ");
           utc = utc.prev;
        }
        return utc;
    }
    public Node utility(Node head) {
        if(head == null) return null;
        Node returnNode = head;
        returnNode.prev = null;
        while(head != null){
            if(head.child != null){
                Node temp = head.next;
                Node prevNode = head;
                Node childFlatten = flatten(head.child);
                childFlatten.prev = head;
                head.next = childFlatten;
                head.child = null;
                if(head.next != null){
                    head = head.next;
                    head.prev = prevNode;
                    while(head.next != null){
                        head= head.next;
                    };
                }
                temp.prev = head;
                head.next = temp;
            }
            head = head.next;
        }
        return returnNode;
    }
}
