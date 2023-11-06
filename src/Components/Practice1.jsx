function MyButton(){
    function HandleClick(){
        alert('You clicked me')
    }
    return(
        <button onClick={HandleClick}>Click Me</button>
    )
}








//  function MyButton () {
//     function handleClick(){
//         alert('You clicked me!')
//     }
//     return(
//         <button onClick={handleClick}>I am Button</button>
//     )
// }


export default function MyApp (){
    return(
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
            <Profile/>
            
           
        </div>
    )
}


const user ={
    name: 'Hedy Lamarr',
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

 function Profile(){
    return(
        <div>
            <h1>{user.name}</h1>
            <img src={user.imageUrl} alt={'Photo of'+user.name}
            style={{width:user.imageSize,
                height:user.imageSize,
                
            }} />
            
        </div>
    )
}

// const products = [
//     { title:'Cabbage', isFruit: false, id:1}
//     { title:'Garlic', isFruit: false, id:2}
//     { title:'Apple', isFruit: true, id:3}
// ]

// function ShoppingList (){
//     const listItems = products.map(product => <Practice2  key={product.id} style={{color:product.isFruit ? 'magenta' : 'darkgreen'}}>{product.title} ></Practice2> )

//     return(
//         <ul>{listItems}</ul>
//     )
// }

