# FP4 - Final Project Writeup

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
