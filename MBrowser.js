class Main extends App
    {
        onStart()
        {
        ui.setTheme("material")
            // Creates a fullscreen layout with objects vertically centered.
            this.main = ui.addLayout( "main", "Linear", "Top,FillXY", 1, 1 )
            this.main.backImage = "Img/bg_1.jpg";
this.main.animate("lightSpeedInRight", 1450);
          
            this.apb = ui.addAppBar( this.main, "MBrowser", "Menu,Primary",1, -1)
            this.apb.backImage = "Misc/appBG.png";
            this.apb.textColor = "#ffffff";
            this.apb.fontFile = "Misc/YoungSerif-Regular.ttf";
            this.apb.animate("fadeInUpBig", 1450);
            this.apb.setOnMenu( this.showDrawer )
						var navs = [
                [ "Groups", "person" ],
                [ "Folder", "folder" ]
            ]

var navs2 = [
                ["Folders","folders"],
                ["Audios","music_note"],
                ["Photos","photo"],
                ["Videos","movie"]
            ];
            var steps = [ "Carmen Villalobos", 'Jenna Von Oy', "Rachel Hunter","Carmen Electra","Halle Berry", "Altair Jarabo", "Erika Eleniak", "Molly Gordon", "Emily Bett Rickards", "Ariana James"];

            var img1 = "Img/Carmen-Villalobos-427x640.jpg";//Img/Screenshot_20231006_185215_YouTube.jpg";
       
            var img2 = "Img/jenna-von-oy-v0-y505re4ke8aa1.jpg";//Img/Carmen-Villalobos-300x400.jpg";//Img/Screenshot_20231006_185257_YouTube.jpg"
            var img3 = "Img/Rachel-Hunter-300x400.jpg";
            var img4 ="Img/Carmen-Electra-300x400.jpg";
            var img5 = "Img/Halle-Berry-300x400.jpg";
var img6 = "Img/Altair-Jarabo-300x400.jpg";
var img7 = "Img/Screenshot_20231006_202749.jpg";
var img8 = "Img/Molly-Gordon.jpg";
var img9 ="Img/3c31d352152fa7c0d34f470acedfcaad.jpg";
//https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
var img10 ="Misc/ariana-2051940105800481507.webp";
            // add stepper with mobile
            this.stepper = ui.addStepper( this.main, steps, "mobile,autoswipe,dots,alternativelabel,loop", 0.96, 0.84 );
            this.stepper.animate("bounceInUp", 1950);
this.stepper.setMargins(2,2,2,2,"px");
this.stepper.setCornerRadius(2,2,2,2,"px");
            // get the first layout on the stepper
            this.lay1 = this.stepper.getLayout( 0 )

                // add an image control to the first layout
                ui.addImage( this.lay1, img1, "Button", 1 )

            // get the second layout on the stepper
            this.lay2 = this.stepper.getLayout( 1 )

                // add an image control to the second layout
                ui.addImage( this.lay2, img2, "Button", 1 )

            // get the third layout on the stepper
            this.lay3 = this.stepper.getLayout( 2 )

                // add an image control to the third layout
                ui.addImage( this.lay3, img3, "Button", 1 )

     // get the forth layout on the stepper
            this.lay4 = this.stepper.getLayout( 3 )

                // add an image control to the third layout
                ui.addImage( this.lay4, img4, "Button", 1 )

                      this.lay5 = this.stepper.getLayout( 4 )

                // add an image control to the third layout
                ui.addImage( this.lay5, img5, "Button", 1 )

this.lay6= this.stepper.getLayout( 5 )

                // add an image control to the third layout
                ui.addImage( this.lay6, img6, "Button", 1 )

this.lay7= this.stepper.getLayout( 6)

                // add an image control to the third layout
                ui.addImage( this.lay7, img7, "Button", 1 )


this.lay8= this.stepper.getLayout( 7)

                // add an image control to the third layout
                ui.addImage( this.lay8, img8, "Button", 1 )

this.lay9= this.stepper.getLayout( 8)

                // add an image control to the third layout
                ui.addImage( this.lay9, img9, "Button", 1 )

this.lay10= this.stepper.getLayout( 9)

                // add an image control to the third layout
                ui.addImage( this.lay10, img10, "Button", 1 )

            // Creates a BottomNavbar Component and add it to the TreeView
            this.bmn = ui.addBottomNavbar( this.main, navs2, "Primary", 1 )
						this.bmn.textSize = 10;
						//this.bmn.backColor = "#7ACE5B";
						this.bmn.backImage = "Misc/navBG.png";
						this.bmn.setBorder(2,"#3333ef");
						this.bmn.textColor = "#3333ef";
						this.bmn.animate("fadeInDownBig", 1450);
            // Add an icon buttons to the appbar
            //this.btn1 = ui.addButton( this.apb.layout, "person", "icon" )
            this.btn2 = ui.addButton( this.apb.layout, "delete", "icon" )
            this.btn3 = ui.addButton( this.apb.layout, "more_vert", "icon" )

            // Adds a drawer layout
            this.drawLay = ui.addLayout(null, "Linear", "Top,FillXY"),
            this.drawLay.backImage = "Misc/images (10).jpeg";

            // Adds a drawer to the app and pass the drawer layout
            this.drawer = ui.addDrawer(this.drawLay, "left")

            // Adds a list to the drawer layout
            let lst = [
                ["folder", "Folders"],
                ["music_note", "Audios"],
                ["photo", "Photos"],
                ["movie", "Videos"]
            ]
            this.lstMenu = ui.addList(this.drawLay, lst, "Icon", 1, 1)
            this.lstMenu.label = "Main navigation"
            this.lstMenu.avatarSize = "Small";
            this.lstMenu.iconSize = 16;
            
            this.lstMenu.iconColor = "#ffffff";
     this.lstMenu.textSize = 16;
            
            this.lstMenu.textColor1= "#ffffff";
    
                    this.lstMenu.backImage = "Misc/images (10).jpeg";
this.drawLay.animate("lightSpeedInRight", 1450);
 
        }

        showDrawer() {
            this.drawer.show()
        }
    }