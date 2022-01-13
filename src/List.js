// import React from 'react';

// function List({people}) {
//     return ( 
//         <>
//         {people.map((person)=>{
//             const {id,name,age,image}=person;
//             return<article key={id} className='person'>

//                 <img src={image} alt={name}/>
//                 <div>
//                     <h4>{name}</h4>
//                     <p>{age} years</p>
//                 </div>
//             </article>
//         })}
//         </>
//     );
// }

// export default List;

// import React from 'react';

// function List({people}) {
//     return (
//         <>
//         {people.map((person)=>{
//             const {id,name,age,image}=person;
//             return(
//                 <article key={id} className='person'>
//                     <img src={image} alt={name} />
//                     <div>
//                         <h4>{name}</h4>
//                         <p>{age}</p>
//                     </div>
//                 </article>
//             )

//         })

//         }
        
//         </>
//     );
// }

// export default List;


import React from 'react';

function List({people}) {
    return (
        <>
        {/* here we are passing people as prop bcoz we pass in app cmpo <List people={people} */}
        {people.map((person)=>{
           const {id,name,age,image}=person;
        //   ehatever we are writting under the return it displays on to the screen
         return(
              <article key={id} className='person'>
              <img src={image} alt={name}/>
              <div>
               <h4>{name}</h4>
               <p>{age}</p>
              </div>

          </article>
         )
        })

        }
        
        </>
    );
}

export default List;