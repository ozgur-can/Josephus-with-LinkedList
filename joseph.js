class LinkedList
{
    constructor()
    {
        this.head=null; // one head
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
            //newNode.next=this.head;//yeni
        }  
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
                let now = this.head; // copy the head
                this.head=null;     // del the head
                now=now.next;       // jump to the now.next
                this.head=now;      // set the head to the now
                this.length--;
            }

            
        }
    }


    rotation(s)
    {
        if(s==0)
        return;

        let now = this.head;

        let count=1;
        while(count<s && now != null)
        {
            now = now.next;
            count++;
        }

        if(now==null)
        return;

        let sth = now;

        while(now.next!=null)
        now=now.next;

        now.next=this.head;
        this.head=sth.next;
        sth.next=null;
        
    }

    show()
    {

        let temp = this.head;
        while(temp.next!=null)
        {
            print(temp);
            temp=temp.next;
        }
        print(temp);
    }

    
    josep(i,j)
    {
        let temp;
        this.addtoHead(1);
        for(let a=2;a<=i;a++)
        this.addtoLast(a);

        this.show();
        print(" ");
        let L = this.length;
        while(L>1)
        {
            this.rotation(j-1);
            this.show();
            print(this.head.value+" gider");
            document.write(this.head.value+" ");
            temp=this.head;
            this.deletefromHead();
            L--;
        }
        print(temp.next.value+" hayatta kalir");
        
    }
        
}

function setup()
{
let example = new LinkedList();
example.josep(14,8);

}
