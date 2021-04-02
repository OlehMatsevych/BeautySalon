
/* ФАЙЛ, В ЯКОМУ РЕАЛІЗОВАНО ЕФЕКТ ХВИЛІ З ГОЛОВНОЇ СТОРІНКИ */

import './Wave.css';

import React, { useState } from 'react'

const Wave = () => {
    return (
        <div>
            <div class="waves">
                <div class="wave wave-dark" >
                    <div class="water"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 32" preserveAspectRatio="none">
                        <title>wave2</title>
                        <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z"></path>
                    </svg></div>
                    <div class="water"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 32" preserveAspectRatio="none">
                        <title>wave2</title>
                        <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z"></path>
                    </svg></div>
                </div>
                <div class="wave wave-light" >
                    <div class="water"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 32" preserveAspectRatio="none">
                        <title>wave2</title>
                        <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z"></path>
                    </svg></div>
                    <div class="water"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 32" preserveAspectRatio="none">
                        <title>wave2</title>
                        <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z"></path>
                    </svg></div>
                </div>
            </div>
        </div>
    )
}

export default Wave