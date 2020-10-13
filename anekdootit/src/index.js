import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    const { onClick, text } = props
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const App = (props) => {
    // Onkohan fiksuin tapa?
    const mostPopularAnecdote = () => {
        return votes.indexOf(Math.max(...votes))
    }

    const [selected, setSelected] = useState(0)
    const [votes, setVote] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0));
    const indexOfMostPopularAnecdote = mostPopularAnecdote() //votes.indexOf(Math.max(...votes))

    const randomText = () => {
        const rnd = Math.floor(Math.random() * anecdotes.length)
        setSelected(rnd)
    }

    const addVote = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVote(copy)
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{props.anecdotes[selected]} </p>
            <p> has {votes[selected]} votes</p>
            <Button onClick={addVote} text='vote' />
            <Button onClick={randomText} text='next anecdote' />
            <h2>Anecdote with most votes</h2>
            <p>{props.anecdotes[indexOfMostPopularAnecdote]}</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)