        $(document).ready(function(){
            $("button.animation").click(function(){

                $("div").animate({fontSize:"3em"},"slow");
            });

            $("#show").click(function(){
                $("p").toggle();
            })

            $("#fade_out").click(function(){
                $("p").fadeOut("normal");
            })

            $("#fade_in").click(function(){
                $("p").fadeIn("slow");
            })

            $("#fade_to").click(function(){
                $("p").fadeTo(4000)
            })

            $("#hide").click(function(){
                $("p").slideToggle();
            });

            $("[href$='.com']").click(function(){
                $(this).hide();
            });
            $("#call_back").click(function(){
                $("p").hide("slow",function(){
                    alert("The paragraph has been Hidden")
                })
            })

            $("#manipulation_text").click(function(){
                $(":contains('link')").fadeToggle();
            })
            $("#mouseenter").mouseenter(function(){
                $(this).hide();
            })
            $("#mouseleave").mouseleave(function(){
                $(this).hide();
            })
            $("#sp").click(function(){
                $(this).hide(1000);
            })
            $("#sh").click(function(){
                $("#sp").show(1000);
            })

            $("button.toggle").click(function(){
                $("#div1").fadeTo("slow",0.2);
                $("#div2").fadeTo(3000,0.5);
                $("#div3").fadeTo("slow",0.90);
            })

            $("#flip").click(function(){
                $("#panel").slideDown();
            })
            $("button.slidedown").click(function(){
                $("#panel").slideDown();
            })
            $("button.slideup").click(function(){
                $("#panel").slideUp();
            })
            $("button.slidetoggle").click(function(){
                $("#panel").slideToggle();
            })
            $("button.anim").click(function(){
                var div=$("#anim");
                    var div=$("#anim");
                    div.animate({height:'300px',opacity:'0.4'},"slow");
                    div.animate({width:'300px',opacity:'0.8'},"slow");
                    div.animate({height:'100px',opacity:'0.4'},"slow");
                    div.animate({width:'100px',opacity:'0.8'},"slow");
            });
            $("button.chainedcss").click(function(){
                $("#chainedcss").css("color","red").slideToggle(2000);
            });
            $("button.attribute").click(function(){
                alert($("#attribute").attr("href"))
            })
            $("#settext").click(function(){
                $("p.settext").text("Hello world.");
            })

            $("#sethtml").click(function(){
                $("p.sethtml").set
            })

        });