import { useState } from 'react';


const Bookshelf = () => {
    const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);


const [newBook, setNewBook] = useState([
  { title: '', author: '' }
]);

const handleInputChange= (event)=>{

  const{name , value}=event.target
   
     setNewBook({...newBook,[name]:value})

}

const handleSubmit=(event)=>{

event.preventDefault()
//to add new book to books 
const newBookWithId={...newBook, id:Math.random()*1000}
setBooks([...books,newBookWithId])

//to reset the input for title and author
setNewBook({title:"",author:""})
}    



  return (
   <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {<form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title"name="title" value={newBook.title} onChange={handleInputChange} />
        <br/>
        <label htmlFor="author">Author</label>
        <input type="text" id="author"name="author" value={newBook.author} onChange={handleInputChange} /> 
          <br/>
      <button> Add</button>
        </form>
        }
  </div>
  
  <div className="bookCardsDiv">
    
{books.map((book)=>(<div className='bookCard' key={book.id}>{book.title} by {book.author}</div>))}
        
        
        </div>
</div>
  )
}

export default Bookshelf


