import React, { useEffect, useState} from 'react';
import { textSpanContainsPosition } from 'typescript';
//import axios from 'axios';


import './Section.css';

function Section() {
    const [mangaPopular, setMangaPopular] = useState([])
    const [mangaMelhores, setMangaMelhores] = useState([])
    const [mangaDoAno, setMangaDoAno] = useState([])

    useEffect(()=> {
        
        fetch('https://kitsu.io/api/edge/manga?page[limit]=5')
        .then(response => response.json())
        .then(response => setMangaPopular(response.data))
        fetch('https://kitsu.io/api/edge/manga?page[limit]=5&page[offset]=200')
        .then(response => response.json())
        .then(response => setMangaMelhores(response.data))
        fetch('https://kitsu.io/api/edge/manga?page[limit]=5&page[offset]=100')
        .then(response => response.json())
        .then(response => setMangaDoAno(response.data))
    })

    return (

        <div className='homeC'>
            <div className='popular'>
                <h2>Popular Agora</h2>
                <ul>
                {
                    mangaPopular
                    ?  mangaPopular.map(
                        ({id,attributes:{posterImage:{original}}})=>
                        (<li>

                            <a href={'https://kitsu.io/api/edge/manga/'+id+'/chapters'}>
                            <img key={id} src={original??"imagem nao encontrada"} alt='manga'></img>
                            </a>
                            </li>)

                        )
                    :"Nenhuma manga encontrado"
                }
                </ul>
            </div>
            <div className='bestM'>
                <h2>Melhores do Mês</h2>
                <ul>
                {
                    mangaMelhores
                    ?  mangaMelhores.map(
                        ({id,attributes:{posterImage:{original}}})=>
                        (<li>

                            <a href={'https://kitsu.io/api/edge/manga'+id+'/chapters'}>
                            <img key={id} src={original??"imagem nao encontrada"} alt='manga'></img>
                            </a>
                            </li>)

                        )
                    :"Nenhuma manga encontrado"
                }
                </ul>

            </div>
            <div className='bestY'>
                <h2>Melhores do Ano</h2>
                <ul>
                {
                    mangaDoAno
                    ?  mangaDoAno.map(
                        ({id,attributes:{posterImage:{original}}})=>
                        (<li>

                            <a href={'https://kitsu.io/api/edge/manga'+id+'/chapters'}>
                            <img key={id} src={original??"imagem nao encontrada"} alt='manga'></img>
                            </a>
                            </li>)

                        )
                    :"Nenhuma manga encontrado"
                }
                </ul>
            </div>
        </div>
    );
}


export default Section;