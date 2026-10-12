--Readme document for Vanessa Pham, vanesp6@uci.edu--

A reminder on academic integrity, as described in the syllabus.

In general, the course staff expects that you will look at code and examples from many online resources as part of the assignments, particularly to resolve syntax and understand frameworks. We expect that you'll use other libraries you find, and will even require it in some assignments. These practices are often critical to the work of developers today. The best developers are adept at interpreting the examples they see, customizing them to their specific situation, and citing their sources so they can find them later. We expect you to do the same.

While learning from examples is encouraged, attempting to pass an existing project or example from the web as your own is not allowed. If you ever have a question about what is or is not appropriate, feel free to ask the course staff!

Talking to classmates about class material, assignment requirements, etc. is a great way to verify ideas and get feedback. But this distinctly does *not* permit attempting to pass off someone else’s code as your own. Talking over ideas and approaches is allowed, but the work that you produce and submit must be your own.

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 Readme
- 2/2 Basic HTML content
- 1/1 Basic CSS styling
- 1/1 Advanced feature
- 2/2 Responsive layout
- 1/1 Passes validation checks
- 2/2 Embraces spirit of the assignment

2. What (a) basic features, (b) CSS features, and (c) advanced features did you include in your portfolio?

(a) Basic features
-Images with alt text (ex The hero image, the four project thumbnails, the project gallery screens)
-Links to external pages (I have included links to Figma prototypes, spline files, and presentations)
-Multiple pages with navigation (home, about me, contact, projects)
-Semantic HTML tags (I used <header>, <nav>, <main>, <section>, <figure>/<figcaption> and <ul> lists in place of divs when possible)
-Headings and paragraphs (each page uses <h1> and <h2> headings with <p> text)

(b) CSS features
-Paddings and margins
-Custom color palette (white #f1f2f7, pink #e2788c, blue #83adf0, and beige #edd0ca)
-Custom font (Plus Jakarta Sans)

(c) Advanced features
-Complex page layout (The navigation bar uses flexbox. The home page uses a CSS grid for the 2×2 project layout. The About page uses a three-column grid. The server rack page positions text callouts and SVG lines over an image so they line up with specific parts of it.)
-Extra interactivity: I used JavaScript for the image carousels on the About and project pages. I also used a CSS animation for the falling petals on the home page hero, and hover transitions on the project boxes.
-Nested selectors: I used descendant and combined selectors to target elements inside others, such as .project-box:hover .project-overlay for the description overlay and .skills-list li:nth-child(1) for the gradient on the skills boxes.

3. Did you ignore any of the warnings or errors presented by the accessibility checker? If so, why does this not seem like an accessibility concern? If it's useful, you can consolidate your thoughts on multiple warnings/errors if the rationale is similar.

-I did not have any errors, but I did encounter warnings when running my files through the checker. After reading these warnings, I didn’t find them to be concerning. I’ll go through some examples of why. 

-For CSS:
  -“Due to their dynamic nature, CSS variables are currently not statically checked”: After googling, I found out that this is because the validator can’t check CSS variables and it doesn’t know their value (since I set them in my js files). So it skips checking those lines and leaves this note. 

-For Accessibility:
  -“dir attribute (check 271)”: My pages are all in English, which reads left to right, and each page sets lang="en". The dir attribute is only needed when text direction changes, such as a page mixing in Arabic or Hebrew.
  -“Images may need a long description”: Long descriptions are meant for complex images like charts or diagrams. My images are thumbnails and project screens with short descriptive alt text. The server rack image has visible callout text next to it that describes each labeled part, so nothing is missing.
  -“Visual lists may not be marked”: My real lists (navigation, skills, tools, and contact links) are marked with <ul> and <li>. The warning was triggered by short separate lines of text, like the callout labels, which are not a list.
  -“Long quotations should use <blockquote>”: The long paragraphs are my own project descriptions, not quotations from another source, so <blockquote> would be incorrect.
  -“Image may contain text with poor contrast”: The checker can’t read the contents of images, so it raises this for every image. The screens and posters on my project pages are examples of my design work, and changing their colors would change the work itself. All of the text on my pages is real HTML text, not text inside images.



4. How long, in hours, did it take you to complete this assignment?

  -15+ hours

5. What online resources did you consult when completing this assignment? (list specific URLs, describe queries to Generative AI, or use of AI-based code completion)

-To start off, for page inspiration, I browsed Supahero.io and found a lot of great examples!
-I also really liked this color palette image I randomly found on pinterest. I tried it out and it worked really well:
https://www.pinterest.com/pin/23292123066898346/
- Before going straight to coding, I used figma to lay out my pages 
https://www.figma.com/design/kDkMbwqUfsiMmJPyriC4k2/page-layouts?node-id=0-1&t=tXF9JeECJu0eWV67-1
- I did reuse some features from my original portfolio, such as the hovering description for my projects. My old portfolio can be found here: https://dialog-file-20886963.figma.site/
- Many of my images are official public works of Wuthering Waves by Kuro Games. 

6. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

-I had a quick chat with Katie Yue (classmate), in which she showed me how she was starting this assignment. I saw that she was beginning with deciding her colors and fonts, which inspired me to do the same. 


7. Is there anything special we need to know in order to run your code?

-Nope! Just run the index file. 
