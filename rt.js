class Main extends App
    {
        onStart()
        {
            ui.setTheme("dark")
            // Creates a layout with objects verticaly centered.
            this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

            var steps = [ "Step 1", "Step 2", "Step 3" ]

            var img1 = "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
            var img2 = "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
            var img3 = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"

            // add stepper with mobile
            this.stepper = ui.addStepper( this.main, steps, "mobile,autoswipe,fraction", 0.6 )

            // get the first layout on the stepper
            this.lay1 = this.stepper.getLayout( 0 )

                // add an image control to the first layout
                ui.addImage( this.lay1, img1, "", 1 )

            // get the second layout on the stepper
            this.lay2 = this.stepper.getLayout( 1 )

                // add an image control to the second layout
                ui.addImage( this.lay2, img2, "", 1 )

            // get the third layout on the stepper
            this.lay3 = this.stepper.getLayout( 2 )

                // add an image control to the third layout
                ui.addImage( this.lay3, img3, "", 1 )

        }
    }