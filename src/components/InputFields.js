import React from "react";
import "./InputFields.css"

export default function InputFields() {

    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");

    const myObject = {};

    function handleNameChange(event) {
        const valueFromEvent = event.target.value;
        setName(valueFromEvent);
    }

    function handleAgeChange(event) {
        const valueFromEvent = event.target.value;
        setAge(valueFromEvent);
    }

    function handleSubmit(event) {
        event.preventDefault();

        myObject.name = name;
        myObject.age = age;
        console.log(myObject);
    }


    return (

            <form onSubmit={handleSubmit}>
                <div className="center">
                    <p>What are you for a Vogel?</p>
                    <input
                        value={name}
                        placeholder="name"
                        type="text"
                        onChange={handleNameChange}
                    />

                    <input
                        value={age}
                        placeholder="age"
                        type="number"
                        onChange={handleAgeChange}
                    />
                    <button type="submit">Fly</button>

</div>
</form>
)


}