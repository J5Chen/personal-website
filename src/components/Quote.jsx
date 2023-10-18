const Quote = ({quote}) => {
    const randQuote = quote.content;
    const author = quote.author;

    console.log(randQuote)
    return(
        <>
            {randQuote} <br/> - {author}
        </>
    )
}

export default Quote;