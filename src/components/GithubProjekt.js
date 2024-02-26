import React, { useState, useEffect } from 'react';

export default function JsonDemo() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/zianourozi/repos')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false); // Markera att hämtningen är klar
            })
            .catch(error => {
                console.error('kunde inte läsa data', error);
                setLoading(false); // Markera att hämtningen är klar även om det uppstod ett fel
            });
    }, []);

    const changeBackgroundColor = () => {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    };

    return (
        <div>
            <h1 className='projket-rubrik' onClick={changeBackgroundColor}>Mina projekt</h1>
            {loading ? ( // Visa laddningsindikator om hämtningen är pågående
                <p>Laddar projekt...</p>
            ) : (
                <ul>
                    {posts.map(repo => (
                        <li key={repo.id}>
                            <h2 className='repoName'>{repo.name}</h2>
                            <p>{repo.description}</p>
                            <p>{repo.html_url}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}