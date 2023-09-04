function Message() {
    //the code you see here is calles JSX: javascript XML
    //so this code is going to get compiled to javascript
    const name = 'Tunde'
    if (name)
     return <h1>Hello {name}</h1>;
   return <h1>Hello World</h1>;
}

export default Message;