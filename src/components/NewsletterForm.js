import React from "react";

export default function NewsletterForm() {
    const [email, setEmail] = React.useState("");

function handleChange(event){
    const valueFromEvent = event.target.value;
    setEmail(valueFromEvent);
}

    function handleSubmit(event){
        event.preventDefault();
        console.log(email);
    }

return(
    <form onSubmit={handleSubmit}>

        <input
            value={email}
            placeholder="email"
            onChange={handleChange}
            type="text"
        />
        <button type="submit">submit</button>
    </form>
);

}