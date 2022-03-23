import React from 'react'

const News = () => {
    const hello = async()=>{
        console.log("H");
        const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Latur&units=metric&appid=4b436c0e79898d1bf10b8cd1e7297b02")
        const data = await res.json();
        console.log(data);
    }
    React.useEffect(() => {
        hello();
    }, [])
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default News
