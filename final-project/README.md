# FP4 - Final Project Writeup

## Part 1: Website Description
### Description
![image](https://github.com/user-attachments/assets/9f877a57-9a71-4a37-8795-90d72fd6142a)

The purpose of my calligraphy website is to share the beauty of Chinese calligraphy and help people understand the Chinese written language, which is such an important part of my culture. I want to make calligraphy interesting and show why it's still meaningful today. By highlighting both the art and the history of Chinese characters, I hope the website can help people appreciate my culture in a modern context.

The website has two main sections: the history of the development of Chinese characters and the fundamental strokes used in calligraphy. The history page explores the evolution of Chinese characters over seven distinct phases using the fish character "鱼" as an example. Each phase discusses key characteristics and provides a detailed study of the fish character, offering insight into the fascinating journey of Chinese script through time.

The strokes section introduces the basic building blocks of calligraphy: the eight fundamental strokes from the Principles of Yong that make up every character. These fundamental elements are essential for anyone interested in mastering Chinese calligraphy. This information is designed to be useful for everyone, whether you're just starting out or already have some familiarity with calligraphy.

To make the learning process engaging, I've added animations that bring the strokes and historical elements to life, making the experience more dynamic for users. The content is broken into small, easy-to-understand sections, ensuring it remains accessible without feeling overwhelming. The website is designed to make learning enjoyable and straightforward, regardless of your level of experience.

The website is for anyone curious about Chinese culture or calligraphy, whether you're just starting out or looking to deepen your appreciation. Through this project, I want to foster a deeper understanding of this fundamental element of Chinese culture, making it accessible to a broader audience while celebrating its cultural significance.

### Responsive Widths
#### History Landing Page
1) 800px
2) 350px
#### History Detail Page
1) 800px
2) 400px
#### Stroke Landing and Detail Page
1) 400px

## Part 2: User Interaction
### History Homepage
![image](https://github.com/user-attachments/assets/da309a18-ee26-4f6e-9474-d0dd0a890c3e)

* Click to Scroll Down
  * Interaction Type: Click and Scroll
  * How: Click on the "Scroll to Read More" button at the bottom of the text.

![image](https://github.com/user-attachments/assets/3369af26-b713-4723-91e5-46e89c0e0d98)

* Select Time Period Card
  * Interaction Type: Click
  * How: Click on a time period card to be redirected to the history detail page and scroll to the respective section.
* Hover over Time Period Card
  * Interaction Type: Hover and Size Change
  * How: Hover over a time period card to increase its size and indicate a hover state.

### History Detail Page

![image](https://github.com/user-attachments/assets/15f3b160-d631-41d5-aa35-6ef44ddf223a)

* Scroll to Observe Changes
  * Interaction Type: Scrolling and Animation
  * How: Scroll on the page to see changes in the sidebar and graphics.

![image](https://github.com/user-attachments/assets/903d4b9f-c395-4d76-94f7-aa31388c298d)

* Click on Sidebar
  * Interaction Type: Click and Scroll
  * How: Click on the sidebar text to scroll to the respective section.

![image](https://github.com/user-attachments/assets/1809e975-43e5-4ba5-abdb-2ce223bdc1c1)

* Back Button
  * Interaction Type: Button Click
  * How: Click on the back button to return to the homepage.

### Stroke Homepage

![image](https://github.com/user-attachments/assets/5e7d1904-217f-4fb4-92c3-85b3ad30331c)

* Click to Scroll Down
  * Interaction Type: Click and Scroll
  * How: Click on the text in the sidebar to scroll to the respective section.
* Click on Individual Strokes
  * Interaction Type: Click and Redirect
  * How: Click on the stroke while hovering to be redirected to the details page.

![image](https://github.com/user-attachments/assets/067f4bf4-62d9-4f7c-97fc-a9cda8b147cb)

* Hover Over Individual Strokes
  * Interaction Type: Hover
  * How: Hover over any stroke to reveal a darker shade and display a card with a short description.

![image](https://github.com/user-attachments/assets/393fb253-e193-4e0b-8246-e3b72ad729a7)

* Scroll Down to View Stroke Details and Animation
  * Interaction Type: Scroll Animation
  * How: Scroll down to view stroke animations.
 
![image](https://github.com/user-attachments/assets/7fb7930f-6a1e-4b1e-9d58-265a03624f17)

* Click Back to Top
  * Interaction Type: Button Click
  * How: Click the "Back to Top" button in the right-hand corner to scroll back to the top.

### Stroke Detail Page

![image](https://github.com/user-attachments/assets/130d8ae6-7d2f-4e81-b84b-bdfe9040c0b2)

* Click to Scroll Down
  * Interaction Type: Click and Scroll
  * How: Click on the text in the sidebar to scroll to the respective section.

![image](https://github.com/user-attachments/assets/0e9d2a8a-3562-491f-9f14-78d726d17926)

* Scroll and Play Stroke Animation
  * Interaction Type: Scroll Animation
  * How: Scroll down to view alternating stroke animations.

![image](https://github.com/user-attachments/assets/7fb7930f-6a1e-4b1e-9d58-265a03624f17)

* Click Back to Top
  * Interaction Type: Button Click
  * How: Click the "Back to Top" button in the right-hand corner to return to the top.

![image](https://github.com/user-attachments/assets/1809e975-43e5-4ba5-abdb-2ce223bdc1c1)

* Back Button
  * Interaction Type: Button Click
  * How: Click the back button to return to the homepage.

## Part 3: External Tools
### GSAP Library
**Why did you choose to use it over other alternatives?**

GSAP provides a lot of built-in functions that support scroll animation. It allows me to add scroll animation to my website, which is an integral part of the experience. GSAP provides  precise control over animations and has better performance compared to many other JavaScript animation libraries.

**How did you use it?**

I used GSAP to create smooth scrolling animations that allow the image to remain static while scrolling the text through the page.

**What does it add to your website?**

It adds the ability to create scroll animations that make the website more engaging and interesting to navigate through. 

### React Router
**Why did you choose to use it over other alternatives?**

React Router is the most popular routing solution for React, making it a reliable and well-documented choice.

**How did you use it?**

I used React Router to create different routes for each major section of the website; the router is set in App.js that directs to different React files.

**What does it add to your website?**

It provides an intuitive way to simulate the <a></a> tag in regular HTML to achieve multiple pages for the website, allowing users to navigate between different pages of the website.

### Framer Motion
**Why did you choose to use it over other alternatives?**

Framer Motion integrates really well with React and offers an easy way to create interactive animations without complicated coding.

**How did you use it?**

I mainly used framer motion to add hover animations for the time period cards that increase their size when hovering.

**What does it add to your website?**

It adds more micro-interactions to the websites, making the website seem more professional and engaging.


## Part 4: Design Iteration
Adjust the formatting of the time period card into individual cards instead of a timeline of cards for a better responsive structure. This allows the page to maintaina  similar structure when it’s in 2 or more rows and not restricted to the horizontal timeline structu.re 

![image](https://github.com/user-attachments/assets/57b11342-3f63-49e8-a3f3-5e68033ac212)
![image](https://github.com/user-attachments/assets/5d6ca3fc-f0af-4de6-902b-64057306e37a)

Changed the design of the sidebar in the history detail page so have a changing topic on top and a short line indicating progress. The vertical line was distracting and was providing an unnecessary element on the webpage. This also makes sure the sidebar isn’t constantly changing it’s shape and makes it more accessible for users.

![image](https://github.com/user-attachments/assets/f2f8d58b-03a1-4328-af7e-60d96d2a4748)

Switching the grey background and font color for some images and text  for accessibility issues related to contrast, such as the individual stroke component images. This is to make sure the page is in accordance with WAVE standards.

![image](https://github.com/user-attachments/assets/ac515dbe-e7c0-4d39-9092-cc918b126422)

Removing some distracting elements, such as the rocks in the stroke page, which I found unnecessary to the page. This eliminates unnecessary animation that is not related to the topic and makes the page more accessible to the users

![image](https://github.com/user-attachments/assets/a386832c-e68c-4f2b-a107-fdfa032b95e2)

## Part 5: Implementation Challenges
### Implementing hover effect for irregular svg elements
One of the main difficulties I’ve experienced was trying to add hover effects to irregularly shaped strokes. The SVG elements on their own have a rectangular hover zone, which would overlap with other elements and lead to a poor user experience. 

### Static Scrolling
Another one of the main challenges would be to implement the scrolling animation on almost all of the pages that I  implemented with the GSAP library. I had no prior experience with the GSAP library, and I took extensive time to understand the documentation and functions to implement scroll animations.    


## Part 6: Generative AI Use
I used two main GenAI tools, chatGPT and GitHub copilot. 

For ChatGPT, I’ve maily used it to help me debug errors or when I’m stuck and can’t find the solution through any of the documentation online. One of the main strategies I used was to include the context and the error and have it provide me with multiple ideas of what the potential error and solution are. Then, I tested out each of the potential solutions and used it as the base point to analyze the solution further. For example, ChatGPT would be able to quickly notice simple errors, such as something is not properly defined or simple typos that the IDE can’t mark out. One challenge of using ChatGPT to debug is that ChatGPT sometimes can’t produce the correct code, but they will have an idea of what the problem is. Thus, it would be important to have a good understanding of the code itself and what the errors actually mean to piece through the different baselines given by ChatGPT to track down the real problem and refactor the code given by GPT to make it work. There isn’t a specific part of the codebase that was generated by chatGPT, as I have to refactor many parts of the code given by chatGPT.

Another application of ChatGPT I’ve used is to generate repetitive content that’s needed for the website. For example, I have to put the information in a specific JSON format to display on the website, and I would use chatGPT to generate the repetitive javascript object code. However, because chatGPT is incapable of actually understanding the output, it would be hard to get the JSON in the specific format needed, so I’ll have to edit each file output into the desired format. Although it still involves a lot of manual work, it has helped save a lot of time.

Further, I’ve used GitHub copilot extensively throughout this project to help me with coding. The main use of GitHub Copilot is to help me autocomplete lines of code that I was going to write anyway/.

When autocompleting code, the copilot looks at the code I wrote and will predict what I want to write; this helps save a lot of time in writing up repetitive code, such as completing the code for a for loop, setting up if statements, and any type of code that has been written repeatedly. However, the autocomplete of copilot is not always accurate, so I would have to have a very good understanding of what I’m going to write to be able to accept code from GitHub, which means it can’t be a replacement for coming up with code, it can only speed up the process. Further, copilot would occasionally makeup plausible but inaccurate variable names that will result in errors, thus it would be important to have a good understanding of the codebase in general to actually use the tool.

## WAVE Evaluation
!IMPORTANT: Because of how React Router is configured, it is not supported by the WAVE tool. Thus, the following screenshots are taken by adjusting the element that is rendered through the main URL in the main App.js and redeploying each time the element is switched out.
As shown in the image below, the actual element is commented out and replaced with the element that I want to test with the WAVE tool. 
<img width="767" alt="image" src="https://github.com/user-attachments/assets/f3ac1310-dbb1-4913-bd5c-575f945dbc4f">


### History Landing Page
#### Summary
![image](https://github.com/user-attachments/assets/73c3fd9b-6636-493b-a1e7-a7e37a37099f)
#### Details
![image](https://github.com/user-attachments/assets/be6a03ee-cd52-4b8c-8764-79220c55ca5b)
![image](https://github.com/user-attachments/assets/31db50b2-f43f-4f07-8d89-97b510505617)

### History Details Page
### Summary
![image](https://github.com/user-attachments/assets/94c8beff-a30f-47f1-93d0-d8fedd22e2c6)
### Detail
![image](https://github.com/user-attachments/assets/f9a27517-d742-4ecb-8bc8-656cb1963395)

### Strokes Landing Page
### Summary
![image](https://github.com/user-attachments/assets/d1522618-ab52-4a6c-877f-b2a126f7afcb)
### Detail
![image](https://github.com/user-attachments/assets/67cbce5b-b3a0-4c90-953a-384f0f0578ba)

### Stroke Detail Page
Because all the strokes page uses the same .js file, it should reproduce the same outcome. This is using the dian details page as an example for all detail pages
### Summary
![image](https://github.com/user-attachments/assets/b691913e-ab4c-4f2e-9ad6-8b65a723d89c)
### Detail
![image](https://github.com/user-attachments/assets/3a4400a2-99ea-43f3-aab5-393e0821bcef)


# FP2 - Evaluation of the Final project

**Link to Prototype**: https://www.figma.com/proto/wu7bAm8R6dxzxucQQgZNI1/PUI-Final-Project?page-id=0%3A1&node-id=121-146&node-type=canvas&viewport=-3194%2C1091%2C0.33&t=KtIxrg2pQI8YIk3A-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=121%3A146&show-proto-sidebar=1

**Briefly restate your motivation and a short description of your project.**

This project displayed information about Chinese calligraphy, specifically about the history of the development of Chinese characters and the different strokes that make up Chinese calligraphy. The purpose of the project is to educate people about the topic of calligraphy and gain a better understanding of the elegance of beauty of the subject. My main motivation is to increase awareness of something very important in my culture, and I want more people to get an idea of what Chinese calligraphy is.

**Add screenshots of your 2 high-fi prototypes and add a brief summary of the user feedback for each. Use about max. 1 page (<100 words, ~2 images) per prototype.**

**History Page:**
The participants a are generally positive about this page, where the organizational structure is clear and understandable. When observing the users, it is clear that both participants are able to go from the homepage to the detailed page, and use the navigation bar on the side.
When observing one of the participants, they weren’t able to identify that all the characters were a different type of character fish.
![](https://github.com/Michaelli8899/pui-homework-template-advanced/blob/main/final-project/gifs/1-1.gif)

**Strokes Page:**
The participants expressed confusion on the landing page where they didn’t know what to do when first seeing this page. Both participants didn’t know the homepage and the detail pages were scrollable. There were also issues regarding navigation, where one participant expressed they can’t find the way back to the home menu.
One of the participants expressed that they like how the information is spread up in chunks, making it easier for them to read through the information without getting overwhelmed.
![](https://github.com/Michaelli8899/pui-homework-template-advanced/blob/main/final-project/gifs/1-2.gif)

**On 0.5 pages (~300 words), discuss the user feedback you got during the evaluation (i.e. the usability test you did). Indicate which feedback you implemented, inspired new directions, or otherwise influenced your final design.**

One of the recurring pieces of feedback was confusion about certain page interactions, particularly on the Strokes Page, where users didn’t realize the content was scrollable. In response, I added a visual prompt encouraging users to scroll down, making it easier for them to discover more content beyond the initial view. Additionally, I plan on adding visual cues across other pages to guide users to scroll down in general, ensuring that important content below the fold is not missed. These changes aimed to make the interaction more intuitive and ensure users wouldn't miss important details.

Another observation was that some participants had difficulty understanding the layout displays different historical variations of the character "fish" on the History Page. To address this, I plan on adding a new section to the homepage with a descriptive label explaining the character's evolution. This helped to emphasize this page is not all about the fish character but is only using it as an example.
General navigation issues were also highlighted, with participants expressing difficulty in finding their way back to previous sections or the top of the page. To address this, I plan on adding "Back" and "Back to Top" buttons throughout the site. These buttons should provide users with a clear way to navigate without having to rely solely on scrolling or the main navigation bar, ultimately improving the overall user experience.

Finally, feedback regarding the animations was largely positive, with suggestions to make them more seamless and emphasize stroke starting and ending points. I would have to find a way to implement this by code. Currently, I imagine recording animations on Figma and implementing it as a video on the website.

**On about max. 1 page (<100 words, ~2 images), show screenshots of your updated design based on the user feedback.**

**History Page:**
In response to feedback on the History Page, some participants didn't realize that each character represented a different variation of the character "fish" across time periods. To address this, I added an additional section to the homepage with a more descriptive label, highlighting the character evolution and providing contextual information to make this distinction clearer. Further, to help users better understand the page is scrollable, I added the “scroll” navigation to cue users to explore further and discover additional content that might otherwise go unnoticed.
![](https://github.com/Michaelli8899/pui-homework-template-advanced/blob/main/final-project/gifs/2-1.gif)

**Stroke Page:**
On the Strokes Page, participants expressed confusion when landing on this page, as it wasn't immediately apparent that the pages were scrollable. To improve guidance, I added a visual cue on helping users recognize they can hover over the strokes to see additional information, and add the “scroll down” visual to encourage users to scroll down, helping them discover more content below the fold. Additionally, to address navigation issues where users struggled to return to the homepage, I implemented "Back" and for smoother navigation between sections.
![](https://github.com/Michaelli8899/pui-homework-template-advanced/blob/main/final-project/gifs/2-2.gif)

**On 0.5 pages (~300 words), summarize the feedback you received in the lab session and discuss how it influenced your design.**

The feedback I received during the lab session was really valuable and gave me a lot of insight into how to improve my design. The group appreciated the animations and interactions, mentioning that they effectively conveyed the vision I had in mind. This positive feedback reassured me that the core elements of my design were on the right track, so I decided to keep them as they are.
One key point raised was about the scale of the project, with questions about whether it was realistic given the available timeframe. This made me reassess the scope and prioritize the most important features to make sure I could complete the project on time. I originally planned to add another screen to the strokes page to include both basic and advanced strokes, but considering the scope, I decided to list that as a stretch goal instead.

There was also feedback about how the strokes should reload upon refresh. I believe that by implementing this in HTML, it will automatically reload and not behave like it does in the slide version. Additionally, there were suggestions to emphasize the starting and ending points of the strokes, which I plan to incorporate.

Overall, the feedback on the page structure and overall design was positive, which reinforced my approach to keeping a user-friendly layout that centers key content effectively.

**On 0.5 pages (~300 words), outline weekly milestones to plan your expected implementation progress until the end of the semester. List the JS libraries and other components (if applicable) that you plan to use.**

**Week 1**

- Developing the basic structure of the website using HTML and CSS.
- Finish both homepages and start looking into relevant JavaScript (JS) libraries for animations and user interactions (GSAP or ScrollMagic).

**Week 2**

- Implement the History Page with content to highlight character evolution when scrolling.
- Create a template for how the history page can be implemented.

**Week 3**
Finish implementing the history page and start on the individual strokes page.
Create the stroke animations for each stroke.

**Week 4**

- Build a template for all strokes.
- Finish implementing the strokes page.

**JS Libraries and Components**

- GSAP: For smooth animations.
- ScrollMagic: For scroll-triggered effects.

**On 0.5 pages (~300 words), outline how you plan to use Generative AI tools (e.g., ChatGPT, Gemini, Copilot, V0) to aid in the implementation (FP3 & FP4). What would you use? What do you expect Generative AI to help you with? What might it not be able to help you with? How would you use Generative AI responsibly?**

To help with the implementation process, I plan to use Generative AI tools like GitHub Copilot and ChatGPT to work more efficiently. GitHub Copilot will assist me in writing and filling in code, saving time on repetitive tasks and boilerplate code. By automating these simpler parts of coding, I can focus more on the complex aspects of the project that need creative thinking and careful problem-solving, ultimately speeding up progress.

I'll also use ChatGPT as a support tool whenever I'm stuck or need ideas for implementing specific features. Instead of having ChatGPT write the code for me, I'll use it to get inspiration and explore different ways to solve challenges. ChatGPT can provide fresh perspectives on a problem, which is especially helpful when I'm feeling blocked or need a new approach. This will help me better understand potential solutions and choose the most effective way forward. Additionally, ChatGPT can help clarify confusing concepts and give me an overview of best practices for certain technologies or approaches.

Of course, I know that Generative AI tools have their limitations. They might not fully understand the specific nuances of my project or provide accurate solutions for highly specialized problems. Some elements, like project-specific animations or custom user interactions, will still need manual adjustments that AI can't handle perfectly. While these tools are helpful, they can't replace in-depth project knowledge or the creative problem-solving required for unique features.

To use Generative AI responsibly, I'll make sure to verify any suggestions they provide, ensuring everything is accurate and meets the quality standards of the project. I won't just copy code without understanding it—I'll take the time to review and modify AI-generated code so that it fits my needs and aligns with my project goals. By thoughtfully integrating AI assistance, I aim to boost productivity while maintaining full control and understanding of the development process.

# FP1 - Proposal for Critique

**Design 1: Cocktail**

For this design, I want to create an interactive website on cocktail recipients. The user will be able to explore different cocktail recipients, practice mixing a drink, and build their own recipes to save on the website. I want to create this project mainly because I like to mix drinks during leisure hours.

Interaction: I imagine three main screens
The main screen displays each drink.

![image](https://github.com/user-attachments/assets/bd5031b0-2ca2-44d9-b74d-d8c5e1a9697d)

When clicked on each drink, it would direct to an informational page that displays the cocktail's recipe and how to create the cocktail.

![image](https://github.com/user-attachments/assets/82e9b1ce-16b6-483f-8054-0d49f0deb23c)

The last page would be a mini-game-like page allowing the user to practice mixing cocktails with the liquor bottles. Further, I also envision users creating their custom drinks and being added to the home page.

![image](https://github.com/user-attachments/assets/d6661728-2ceb-4b0e-a329-47c62ab413d0)

**Design 2: Calligraphy**

For this project, I want to create an informative, interactive website that introduces the history and art of Chinese Calligraphy. I’m motivated to create this project as a way to educate more people about this very important element of my culture and heritage.

Interaction: I imagine two main pages for this project

This page displays the history and transformation of Chinese calligraphy from the very first characters to modern Chinese characters. When the page scrolls, the font element stays in place but transforms from phase to phase while the text scrolls up.

![image](https://github.com/user-attachments/assets/2ce8e060-a2da-4311-b00b-a0bae66d1ff4)

The second page would display a character, and when hovered over, it would highlight a specific stroke from the character. When clicked on, it would direct the user to a page specific to the stroke with other information regarding it.

![image](https://github.com/user-attachments/assets/f6c4fd1d-cb87-4c7e-bf13-e730ea5cb577)
![image](https://github.com/user-attachments/assets/afbf629f-a5d1-4252-bf38-c663d72fc80e)

**Design 3: Portfolio Revamp**

For this project, I want to create some more interactive elements on top of my current portfolio on the homepage and about me page. My motivation is to display my design capabilities and increase my competitive advantage as a designer in the job market.

Interaction:
For the home page, I imagine a better display of the different projects, as well as the ability for users to preview an existing project by hovering over a small section.

![image](https://github.com/user-attachments/assets/80a45320-8f22-4e29-9579-8b934f2224e1)

For the about me page, I’m imagining a sandbox area with blocks of “interesting things” that can be interacted with by dragging and dropping with simulated physics. Each box would open a window with images and artifacts related to my interests.

![image](https://github.com/user-attachments/assets/d492854f-fb8e-4f02-bbfa-b69c3a49495d)

**Critique Summary:**

Regarding the feedback I received from the critique, there is a common theme of scoping down for the first two projects, where it is important to pick a few topics to work on rather than building all 50+ characters/drinks. Before this critique session, I had concerns about an API, but I clarified what I wanted to do afterward. Another general feedback would be that people enjoyed each project sketch's potential interactions and want to see more interesting interactions.

For the cocktail project, the audience liked the visual and interactive potential of the cocktail glasses, especially the different cup shapes and cocktail drinks. As the website is very graphic intensive, concerns have been raised about the accessibility of the graphics, which would make it harder for screen readers and other accessibility tools to use the website. Further, there are issues related to the complexity of managing the ingredients and using 3D renders, and an alternative 2D graphic was suggested for easier implementation. There are also concerns about the complexity of managing pouring animations, sliding animations, etc, on the 3rd making cocktail screen.

The feedback on the calligraphy website was very positive overall, especially on the potential between information and visuals. The project was also suggested to be scoped down to avoid being too much to handle for this project. A section about the general order of the strokes for the characters was also suggested.

For the portfolio revamp, the critiques emphasized creating an engaging experience that doesn’t overshadow the actual projects. There is positive feedback regarding the drag-and-drop feature, but it would work better as a stand-alone feature rather than as the main feature implemented. There are also concerns about this feature working on mobile devices, especially with complex animations.

**Feedback:**

After the critique session in the lab, I decided to work on the calligraphy project. One of the main critiques I will be taking in is to narrow the scope to avoid the overwhelming complexity of the project. This critique has helped me, as when I was still sketching out the project, the general size was one big concern I had when proceeding with the project. To keep things focused, I will concentrate on one specific historical period of Chinese calligraphy for the components/strokes of calligraphy. Further, I will only use a few characters as examples, try to generalize the strokes, and not make them hyperspecific. This way, I can dive deeper into the details and keep the workload more manageable within the time I have.
One critique I had was to include the stroke orders of characters. I would take part in that suggestion by including it as a small section with generalized information but not hyper-specific for every character. This makes the project better scoped while also providing necessary information for the users.

One critique I had was to include the stroke orders of characters, and I would take part of that suggestion by including it as a small section with generalized information but not hyper-specific for every character. This makes the project better scoped while also providing necessary information for the users.
