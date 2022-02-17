import React from "react"
import Title from "./Title"
import * as styles from "../css/contact.module.css"

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contacta a" subtitle="mimi" />
            <div className={styles.center}>
            <form action="https://formspree.io/f/mzborgrd" method="POST" className={styles.form}>
                <div>
                    <label htmlFor="name">nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className={styles.formControl}
                        placeholder="tu nombre"
                    />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className={styles.formControl}
                    placeholder="email@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="message">mensaje</label>
                    <textarea
                    name="message"
                    id="message"
                    rows="10"
                    className={styles.formControl}
                    placeholder="tu mensaje"
                    />
                </div>
                <div>
                    <input
                    type="submit"
                    value="Enviar"
                    className={styles.submit}
                    />
                </div>
            </form>
            </div>
        </section>

    )
}

export default Contact