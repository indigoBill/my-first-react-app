function Greeting(){
    return <h1>&quot;I don&apos;t know if you&apos;ve noticed but I&apos;m new here. Hehe.&quot;</h1>
}

function FoodGreeting(){
    return <h1>&quot;I like food...hello.&quot;</h1>
}

function HtmlToJsx(){
    return (
        <div>
            <h1>Test title</h1>
            <svg>
                <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
            <form>
                <input type="text"/>
            </form>
        </div>
    );
}
export {Greeting, FoodGreeting, HtmlToJsx};