import { useState } from 'react';

const Surprise = () => {

    const [myList, setMyList] = useState([])
    const [taskName, setTaskName] = useState([])

    return(
        <div className="">
            <div className="surpriseBox1">
                <h1>TO DO LIST</h1>
                {
                    myList.map((task, i) => {
                    console.log(task, i)
                    return (
                        <div className='task'>
                        <span>{task}</span>
                        <button
                            onClick={() => {
                            // faire une copie du tableau
                            const myListCopy = [...myList]
                            // delete le ième élément
                            myListCopy.splice(i, 1)
                            // setMyList de la copie a laquelle on a retire un element
                            setMyList(myListCopy)
                            }}
                        >X</button>
                        </div>)
                    })
                }
                <input type='text' value={taskName} onChange={(event) => {
                    setTaskName(event.target.value)
                }} />
                <button
                    onClick={() => {
                    // faire une copie du tableau
                    const myListCopy = [...myList]
                    // push dans la copie
                    myListCopy.push(taskName)
                    // setmyList de la copie
                    setMyList(myListCopy)
                    // j'avais pas le droit d'ecrire setMyList(myList.push(taskName))
                    // car je modifiais myList en direct
                    // Vider le contenu de l'input en UNE LIGNE
                    setTaskName('')
                    }}
                >AJOUTE MOI</button>

                <div className="carre"></div>
            </div>
            <div className="surpriseBox2">
                <h1>Pendu</h1>
                <h2>Trouve le mot</h2>
            </div>
        </div>
    )
}

export default Surprise