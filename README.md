<<<<<<< HEAD
﻿#  **Dynamic Expense Tracker - A Visual Financial Dashboard.**

This illustration provides a clear example of an expense tracking chart. The model effectively displays key financial data, including ***current balance*** and ***spending patterns*** on a daily and weekly basis. This format can serve as a standard template for individuals to monitor their weekly expenses. Additionally, it is suitably designed for presenting financial information to an individual or a group, offering a concise overview of expenditure for the week.

> I started this project as a way to brush up on my CSS skills. I've
> found that even simple tasks can be pretty challenging if I push
> myself enough. It was a fun experience, and I definitely learned a lot
> from working on this project.
> 

## Tools and Thought Process Overview

For this project, my goal was to go back to the basics and really dive deep into the fundamentals. Therefore, I chose to stick with the core technologies: **HTML**, **CSS**, and **JavaScript**, without relying on any additional libraries like *Sass*. This approach allowed me to get hands-on experience and a thorough understanding of these foundational elements. Additionally, I utilized **Figma** for the initial planning and design phase of the website before proceeding with the actual development.

Instead of using a predefined amount or loading data from a set JSON file as originally suggested by the project guidelines, I opted to showcase the dynamic capabilities of my illustration. To achieve this, I implemented randomization for all the figures, ensuring that the numbers change each time the website is reloaded. It's important to note, however, that if I were to adapt this for real-world application, I could easily integrate a JSON file to set the variables accordingly.

## General Overview of Design
![Image of the finalized project.](https://i.imgur.com/vRc9hg8.png)
The design features a panel at the top displaying the **user’s balance**. Below that is the spendings panel, which is the main focus, providing detailed insights into the **week's expenses**. I aimed for a visually engaging and smooth experience; hence, after the panels fade in, the expense bars gradually rise, changing colors based on the spending amount. The color scheme is intuitive: starting with **green** for lower spendings and transitioning through **orange** to **red** as expenses increase, visually encouraging lower spending. When users hover over each of the expense bars, a tooltip fades in, revealing the **exact amount spent that week**. In its current iteration, the height of the bars is relative to the highest spending figure. For practical applications, it might be more beneficial to align these bars with a predetermined spending goal or other relevant benchmarks to offer more context.

Beneath the bar graph lies the second segment of the panel, which complements the graphical representation above. As the bars reach their full height, detailed information about weekly expenditures smoothly appears, enhancing the page's overall fluidity. This section not only shows the **total amount spent over the week** but also provides a comparative percentage indicating whether the spending was more or less than the previous week. In keeping with the intuitive design, this percentage is color-coded: red indicates increased spending, while green signifies a reduction in expenses.

**The website can be viewed by going to [URL]**

## Challenge Points

**Bar Direction:** 
There were some key challenges to developing this website that stumped me, the first and main one was of course the **bar graph**. As soon as I saw the bar graph I knew I wanted the bars to smoothly rise up at the start, which meant I had to solve a few problems. First, I didn’t want the panel to grow as the bars did, thats an easy fix since the bars will have a defined maximum height, *we’ll just lock the bar graph section to become a defined height*, so itll stay that height even if they’re all the way down.  

I encountered an interesting challenge during development. The website's design inherently draws shapes from top to bottom, which caused an issue with the bar graph: it would start drawing from the top, contrary to the intended bottom-up approach.

![enter image description here](https://i.imgur.com/QSYn5po.png)
Initially, after thorough research, I tried a solution involving **CSS positioning**. I used `position: absolute` combined with `bottom: 0` to anchor elements at the bottom. This approach initially posed a problem: *the dynamic height and width of the bar graph did not match the size of the panels*, necessitating predefined dimensions. While the height issue was already addressed in the *previous challenge* by pre-setting the panel sizes, the variable width of the bar graph remained a challenging aspect to align with the panels. This fix was manageable for a single resolution, but adjusting it for various screen sizes seemed daunting. Moreover, applying `position: absolute` to each div-container (which includes the week's amount, the individual bar, and the day of the week) caused them to overlap, negating the benefit of using `display: flex` for spacing.

Eventually, after much experimentation, I discovered a simple yet effective CSS property: `margin-top: auto`. Applying this to each container automatically filled the space above, pushing the content downwards, allowing the bars to grow from the bottom as intended.

> Despite the frustration, this experience taught me an invaluable
> lesson in CSS that I'll undoubtedly remember going forward.

**Color Scheme:** 
After, I aimed to create a visually engaging experience where the bars in the graph would smoothly transition colors as they rose, symbolizing the negative connotation of higher spending. To achieve this, I devised a method where the color of each bar would be determined upon the website's load, based on the same value used for its height. The formula was structured as follows:

    let redValue = minRed + ((maxRed - minRed) * perc);
In this formula, the minimum value, representing a green color, was set to **rgb(74, 222, 128)**, and the maximum value, representing red, to **rgb(248, 113, 113)**. I calculated the variable color values based on *`perc`*, where *`perc`* represents the bar's height.

Example: `redValue = [74] + ((248 - 74) * percentageOfBar); `

While this method was largely successful, it presented an aesthetic challenge. The transition from green to red through this method resulted in a middle color that appeared as a light brown, which was less visually appealing as demonstrated in the provided image.

![A standard red to green color scheme as opposed to mine](https://i.imgur.com/9LqfGw9.png)

To enhance the color transition, I introduced an intermediate color – **orange**. The revised approach was as follows: If the perc value was between *0 and 0.5*, the color would transition between green and orange; for values between *0.5 and 1*, it would transition from orange to red. *CSS transitions* were employed to ensure a smooth color change as the bars rose.

![My solution to the problem, a bar displaying green to orange to red.](https://i.imgur.com/2ACZEH2.png)

This is the finalized function I developed to calculate and assign the appropriate color for each bar:

    function  setColor(element, value) {
	    let  perc  =  value  /  spendingGoal;
	    if(perc  >  1) {perc  =  1;}
	    let  minRed, minGreen, minBlue;
	    let  maxRed, maxGreen, maxYellow;
	    if(perc  <=  .5) {
		    //Green
		    minRed  =  74;
		    minGreen  =  222;
		    minBlue  =  128;
		    
		    //Orange
		    maxRed  =  245;
		    maxGreen  =  158;
		    maxBlue  =  11;
	    } else {
		    //Orange
		    minRed  =  245;
		    minGreen  =  158;
		    minBlue  =  11;
		    
		    //Red
		    maxRed  =  248;
		    maxGreen  =  113;
		    maxBlue  =  113;
	    }
	    let  redValue  =  minRed  + ((maxRed  -  minRed) *  perc);
	    let  greenValue  =  minGreen  + ((maxGreen  -  minGreen) *  perc);
	    let  blueValue  =  minBlue  + ((maxBlue  -  minBlue) *  perc);
	    
	    document.getElementById(element).style.backgroundColor  =  "rgb("  +  redValue  +  ","  +  greenValue  +  ","  +  blueValue  +  ")";
    }

## Final Thoughts

Even though this was a relatively straightforward project, it turned out to be a great learning experience. One of the things I did well was the effective planning and designing of the website in *Figma* before diving into development. This preliminary step was crucial in understanding how different elements would interact and ensured that I had a clear vision for the site. Without this initial planning phase, I might have missed key considerations during the development process.

However, there are areas where I see room for improvement. The responsive design, while functional, could have used more attention, especially in creating a smoother transition to mobile view. I acknowledge that investing more time in this aspect would have resulted in a more robust foundation for different screen sizes.

Additionally, the *JavaScript* code could be more streamlined. While it serves its purpose, refining and organizing the *JS* code would be my priority for future improvements. It's worth noting that a significant portion of the current *JS* is dedicated to generating random data. If the data were sourced from a backend server, the need for much of this *JavaScript* code would be eliminated, simplifying the overall script.

## Contribution

The original project was designed by [Frontend Mentor](https://www.frontendmentor.io/), you can find the project [here](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt) to try it out for yourself!



=======
# Dynamic Expense Tracker - A Visual Financial Dashboard.

>>>>>>> 9280d8a26583e93a8cd717b7c89735b9860785a8
