import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

function Categories({ categories }) {
    return (
        <div className={styles.categories}>
            {categories.map((category) => (
                <Link
                    className={styles.category}
                    key={category.key}
                    href={`/${category.id}`}
                >
                <div className={styles.name}>{category.name}</div>
                </Link>
            ))}
        </div>
    )
}

export default Categories