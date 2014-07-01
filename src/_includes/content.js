/**
 * Tags definition
 * Tag - short name
 */
 var tags = {
 	"design": {"short": "dsgn"},
 	"illustration": {"short": "illust"},
 	"type": {"short": "type"},
 	"branding": {"short": "brand"},
 	"logo": {"short": "logo"},
 	"web": {"short": "web"},
 	"fashion": {"short": "fshn"},
 	"tshirt": {"short": "tshirt"},
 	"edition": {"short": "edit"},
 	"3d": {"short": "3d"}
 };

/**
 * Portfolio contents
 *
 * name: Title of the piece of work
 * url: Name of the associate HTML file (without '.html')
 * thumb: Name of the thumbnail image
 * tags: categorie of the piece of work (illustration, branding, design, type...)
 * desc: Short description, used as a popup captionproyecto, ponlas al nivel del titulo (no me mola en superindice, me ralla :P
 * long-desc: Long description, used in the associated page
 */
var works = [
	{
		"name": "Play with Type",
		"url": "/portfolio/play_with_type.html",
		"thumb": "w_type.jpg",
		"tags": ["type"]
	},
	{
		"name": "Fear & Terror",
		"url": "/portfolio/fear_terror.html",
		"thumb": "w_fear.jpg",
		"tags": ["edition", "design"],
		"long_desc": "Non breaking space ebooks(2013)<br/>Serie of covers for &ldquo;Fear & Terror&rdquo; collection."
	},
	{
		"name": "Moruna Type",
		"thumb": "w_moruna.jpg",
		"url": "/portfolio/moruna.html",
		"tags": ["type"],
		"desc": "Funny type like a bbq in the summer",
		"long_desc": "Self project (2013)<br/>Funny type like a bbq in the summer."
	},
	{
		"name": "Problems",
		"url": "/portfolio/problems.html",
		"thumb": "w_problems.jpg",
		"tags": ["illustration"],
		"desc": "Illustrations for the riddle section of Diario Público",
		"long_desc": "Diario Público (2011)<br/>Illustrations for the riddle section."
	},
	{
		"name": "The Final Cut",
		"url": "/portfolio/final_cut.html",
		"thumb": "w_final.jpg",
		"tags": ["illustration"]
	},
	{
		"name": "My Weird Criminals",
		"thumb": "w_criminals.jpg",
		"url": "/portfolio/weird_criminals.html",
		"tags": ["illustration"],
		"desc": "Illustrations about strange and funny criminals.",
		"long_desc": "Diario Público (2011)<br/>Illustrations about strange and funny criminals.The basic references of these illustrations were taken from low quality images of criminal profiles and CCTV captures, for this reason I decided worked with photocopies and acrilic paint.<br/>Texts by Oscar López-Fonseca."

	},
	{
		"name": "I Am Cibelino",
		"thumb": "w_cibelino.jpg",
		"url": "/portfolio/cibelino.html",
		"tags": ["fashion", "design"],
		"desc": "Pasarela Cibeles & IFEMA (2011)",
		"long_desc": "Pasarela Cibeles & IFEMA (2011)<br/>Winner design of the first edition of the contest &ldquo;Soy Cibelino&rdquo;."
	},
	/*
	{
		"name": "Eco Art Lab",
		"thumb": "w_ecoart.jpg",
		"url": "portfolio/eco_lab_art",
		"tags": ["logo", "branding"],
		"desc": "logo for a series of educational workshops around the common topic 'Art and Solar Power'",
		"long_desc": "The Great Lakes Bay Region Alliance and Fall In... Art and Sol (2012)<br/>logo for a series of educational workshops around the common topic “Art and Solar Power”, focus in “work in process” space to learn, discover, and build experiences"
	},
	{
		"name": "Seven Samurai",
		"thumb": "w_samurai.jpg",
		"url": "portfolio/seven_samurai",
		"tags": ["illustration"],
		"desc": "Self project (2013)",
		"long_desc": "Self project (2013)<br/>screenprint on rice paper 70x100 cm"
	},
	{
		"name": "Solar Artworks",
		"thumb": "",
		"tags": "branding",
		"desc": "Identity for a project that mixes art and solar energy",
		"long_desc": "Solar Artworks® (2011)<br/>Identity for the project that mix art and solar energy<br/><a href="http://solarartworks.com">solarartworks.com</a>"
	},
	{
		"name": "Scout Olympic",
		"thumb": "",
		"tags": "design",
		"desc": "Logo for 'Scout Olympics'",
		"long_desc": "Spanish Scout Group (2010)<br/>logo for the IX edition of the \"Scout olympic\" event, which have been celebrated since 1976"
	},
	{
		"name": "Vegadeo",
		"thumb": "w_vegadeo.jpg",
		"tags": "branding"
	},
	{
		"name": "dlp",
		"tags": "branding",
		"long_desc": "DLP Consultoria (2013)<br/>identity, the logo creates the layout and manages the content and the comunication like DLP does for his clients<br/><a href="http://dlpconsultoria.com">dlpconsultoria.com</a>"
	}
	*/
];
