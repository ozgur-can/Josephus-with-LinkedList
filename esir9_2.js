class LinkedList
{
    constructor()
    {
        this.head=null; // one head
        //this.next=null;
        this.length=0;
    }

    addtoLast(value)
    {
        if(!this.head)
        { 
            ++this.length;
            this.head={'value':value, 'next':null, 'length':this.length};
        }
        else
        {
            this.length++;
            let now=this.head;
            let newNode={'value':value, 'next':null, 'length':this.length};;
            
            while(now.next!=null)
            now=now.next;

            now.next=newNode;
            //newNode.next=null;
        }  
    }

    show()
    {
        let now=this.head;
        if(this.length>=2)
        while(now.next!=null)
        {
            print(now);
            now=now.next;
        }
            print(now);
    }

    addtoHead(value)
    {
        if(!this.head)
        { 
            ++this.length;
            this.head={'value':value, 'next':null, 'length':this.length};
        }
        else
        {
            this.length++;
            let newNode={'value':value, 'next':this.head, 'length':this.length};;
            this.head=newNode;
            
        }

    }

    deletefromLast()
    {
        if(!this.head)
        {

        }
        else
        {
            if(this.length==1)
            {
                this.head={'value':null};
                this.length--;
            }

            else
            {
                let now = this.head;
                while(now.next.next!=null) // if next 2 objects not null then
                now=now.next;               // last now.next is the new last 
    
                now.next=null;
                this.length--;
            }
            
        }
    }

    deletefromHead()
    {
        if(!this.head)
        {

        }
        else
        {
            if(this.length==1)
            {
                this.head={'value':null};
                this.length--;
            }

            else
            {
                document.write("hello");
                let now = this.head; // copy the head
                this.head=null;     // del the head
                now=now.next;       // jump to the now.next
                this.head=now;      // set the head to the now
                this.length--;
            }

            
        }
    }
}

function setup()
{
let example = new LinkedList();

}