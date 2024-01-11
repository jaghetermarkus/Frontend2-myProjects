import { useState, useEffect } from "react";
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Jessica', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Vidar', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Vilgot', id: 3 },
        { title: 'AI and web dev', body: 'lorem ipsum...', author: 'Jessica', id: 4 }
    ]);

    const [name, setName] = useState('Markus');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // const [name, setName] = useState('Vidar');
    // const [age, setAge] = useState(3);

    // const handleClick = () => {
    //     console.log('Hello Ninjas!');
    //     setName('Vilgot');
    //     setAge(0.5)
    // }

    // const handleClickinstead = (name) => {
    //     console.log('Hello ' + name);
    // }

    useEffect(() => {
        console.log('use effect ran');
    }, []);

    return (
        <div className="home">
            {/* <h2>Homepage</h2> <br /> */}
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> 
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Jessica')} title="Jessicas Blogs"/> 

            {/* <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button> */
            /* <button onClick={() => {
                handleClickinstead('Markus')
            }}>Click me instead</button> */}

        </div>
    );
}
 
export default Home;