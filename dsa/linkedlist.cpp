#include <iostream>
using namespace std;

class Node {
    public :
    int data;
    Node* next;
    Node(int val ){
        data = val;
        next = nullptr;
    }
};

class LinkedList {
    public:
    Node* head;
    LinkedList(){
        head = nullptr;
    }

    void insertAtBegginning(int val){
        Node* newnode = new Node(val);
        if(head == nullptr){
            head = newnode;
            return;
        }
         newnode -> next = head;
            head = newnode;
    }

    void display(){
        Node* temp = head;
        while(temp != nullptr){
            cout << temp -> data << " -> ";
            temp = temp -> next;
        }
        cout << "nullptr" << endl;

}
};

int main() {
    LinkedList list;
    list.insertAtBegginning(10);
    list.insertAtBegginning(20);
    list.insertAtBegginning(30);
    list.display();
    return 0;
}