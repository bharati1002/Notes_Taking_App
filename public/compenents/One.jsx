export const One=()=>{
    const time=10;
    const fruits=['apple','mango','orange'];
    const add=()=>{
        return "i am the add contains the logic" 
     }
        const title="one component..";

    
    return (<>
    fruits  are 
    <ul>
        {fruits.map(fruits=><li>{fruit}</li>)}
    </ul>
    {time>12?"am":"pm"}
    <h3>i am the {title}contains the jsx</h3> Add is{add()}
</>