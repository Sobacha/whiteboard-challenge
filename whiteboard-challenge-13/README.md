#### dedupe function

The dedupe function takes a head of a singly linked list and removes consecutive duplication.

The desupe function returns a new singly linked list with no duplication.

## How to install
Clone this repo on your computer
```
git clone <clone ssh of this repo>
```

Run the test
```
npm test
```

Usage
```
// let's assume we have the below linked list.
{value: 1, next: 
  {value:1, next:
    {value: 2, next: null}
  }
}

// and assign its head to a variable called head
// and call dedupe function
dedupe(head);

// now the above linked list is like this.
{value: 1, next: 
    {value: 2, next: null}
}
