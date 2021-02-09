This project is oriented mainly towards design, it is purely front end, mainly 
HTML and SCSS.

This dashboard is responsive, the mobile menu transforms into a sliding sidebar at 900px.
The sliding sidebar is position: absolute and z-index was adjusted. The sliding is 
applied with translateX() to avoid modifying any other element such as width or 
positioning.

The data table is displayed on mobile with the headers on each row, while it is a regular table for 900px
and above. This data is in an array in dashboard.js and each row is added dynamically.

The graphs use ChartJs CDN, the legend was removed and a title was added at the top. Options were added
for: responsiveness, remove grid lines, start scales at zero and add colors.

HTML structure is as follows:
container
    header (mobile menu)
    sidebar
    main
        section: dash-summary-numbers
        section: dash-graphs
        section: dash-logs
    footer

SCSS files are broken down to follow the html structure. Main.scss has global styles, variables and
main containers for the whole document, as well as partials at the bottom. Each .scss partial is a section/header/footer or specific media query.