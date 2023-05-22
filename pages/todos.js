import React, { useEffect, useState } from "react";

const todos = () => {
    // const todos = [{ title: "zdfz", desc: "123"}, {title: "123", desc: "sdfasfasdf"}];

    const  [todos, setTodos] = useState([])
    useEffect(() => {
        let todos = localStorage.getItem("todos")
        setTodos(JSON.parse(todos))

    },[])

    const deleteTodo = (title) => {
        let newTodos = todos.filter(item =>{
            return item.title != title
        })
        localStorage.setItem("todos",JSON.stringify(newTodos))
        setTodos(newTodos)
    }

    const editTodo = () => {

    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">
                        Your TO-DOs
                    </h1>
                    {todos. length == 0 &&<p className="lg:w-2/3 mx-auto leading-relaxed text-base">TO-DO</p>}
                </div>
                <div className="flex flex-wrap -m-4">
                    {todos.map((item) => {
                        return (
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <img
                                        alt="team"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        src={`https://picsum.photos/2000/3000?a=${item.title}`}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            {item.title}
                                        </h2>
                                        <p className="mb-4">{item.desc}</p>
                                        <span className="inline-flex">
                                            <a className="text-gray-500 cursor-pointer" onClick={()=>{deleteTodo(item.title)}} >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="20px"
                                                    height="24px"
                                                >
                                                    <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z" />
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500 cursor-pointer" href = {`/edit/${item.title}`}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 48 48"
                                                    width="20px"
                                                    height="24px"
                                                >
                                                    <path
                                                        fill="#E57373"
                                                        d="M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718C43.139,10.526,43.139,9.625,42.583,9.067"
                                                    />
                                                    <path
                                                        fill="#FF9800"
                                                        d="M4.465 21.524H40.471999999999994V29.535H4.465z"
                                                        transform="rotate(134.999 22.469 25.53)"
                                                    />
                                                    <path
                                                        fill="#B0BEC5"
                                                        d="M34.61 7.379H38.616V15.392H34.61z"
                                                        transform="rotate(-45.02 36.61 11.385)"
                                                    />
                                                    <path
                                                        fill="#FFC107"
                                                        d="M6.905 35.43L5 43 12.571 41.094z"
                                                    />
                                                    <path
                                                        fill="#37474F"
                                                        d="M5.965 39.172L5 43 8.827 42.035z"
                                                    />
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                {/* <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg> */}
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default todos;
