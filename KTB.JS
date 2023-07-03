//:#_KANJIS_TILEMAP_BASE_#:==============================://
//:                                                      ://
//:  A project to allow you to quickly experiment with   ://
//:  tilemap shader ideas without having to do all of    ://
//:  the setup code needed to create the webgl contexts  ://
//:  and basic editing code for setting down tiles.      ://
//:                                                      ://
//:==============================:#_KANJIS_TILEMAP_BASE_#://

window.alert( "[HELLO_WORLD]" );

//:#_D_FOR_DATA_WHICH_IS_GLOBAL_#:=======================://
//:
//:  Anything that ends up colliding with "AIM.JS"
//:  will get further prefix of "ktb_" "
//:  So, if[ d_p2k_000 ]collides, with "AIM.JS" then
//:  [ d_p2k_000 ]becomes[ ktb_d_p2k_000 ].
//:
//:- - - - - - - - - - - - - - -- - - - - - - - - - - - -://
'
    var d_p2k_l01 ; //: Uniform LOCATION #1 ( sampler )::://
    var d_p2k_u01 ; //:      GPU UNIFORM #1 ( sampler )::://
                    //:                                ::://
    var d_p2k_l02 ; //: Uniform LOCATION #2 ( sampler )::://
    var d_p2k_u02 ; //:      GPU UNIFORM #2 ( sampler )::://
                    //:                                ::://
    var d_p2k_l03 ; //: Uniform LOCATION #3 ( sampler )::://
    var d_p2k_u03 ; //:      GPU UNIFORM #3 ( sampler )::://
                    //:                                ::://
    var d_p2k_l04 ; //: Uniform LOCATION #4 ( sampler )::://
    var d_p2k_u04 ; //:      GPU UNIFORM #4 ( sampler )::://
    
    
//:=======================:#_D_FOR_DATA_WHICH_IS_GLOBAL_#://


/** **************************************************** ***
#_KANJIS_TILEMAP_BASE_# :==================================:
#_VECTOR_TILE_PROJECT_# :==================================:

    Goal : Create a tilemap project who's source code
         : can be used any time you want to do a quick
         : tilemap rendering experiment. It should be
         : flexible enough to use is as a library that
         : can be used for the[ MKB ]project.
         : @MKB@ : Magic Kyoot Ball.
         
    Structure : 1 shader for tilemap stuff
              : 1 shader for sprite rendering stuff.
              : 1 shader for tilemap menu stuff
              : 1 shader for sprite MENU rendering.
              
    Uniforms  : Only 4 uniforms. 1 for each texture 
              : sampler we need. Everything else is
              : encoded into texture memory somehow.
              
    Whatever Texture Memory Block :
    
        @wmx@ : whatever_memory - X origin
        @wmy@ : whatever_memory - Y origin


:==================================: #_VECTOR_TILE_PROJECT_# 
:==================================: #_KANJIS_TILEMAP_BASE_# 
#_D_FOR_DATA_WHICH_IS_GLOBAL_# :===========================:

    All mutable data or complex immutable data goes here.
    The global/toplevel stuff. The filescope stuff.

:===========================: #_D_FOR_DATA_WHICH_IS_GLOBAL_# 
VTP : Vector_Tile_Project

    +----===----+
    |           |
    |           |
    |    XXX    |
    |           |
    |           |
    +----===----+
    
    11 111 1111 <-- 9 bits , centerpoint X ( 0 to 320 )
     1 111 1111 <-- 9 bits , centerpoint Y
     1 111 1111 <-- 8 bits , radius      X
     1 111 1111 <-- 8 bits , radius      Y
     
     9+9+8+8 === 34 bits... Already too many bits...
     Wait.... Radius is a 1-dimensional value.. so...
     
    11 111 1111 <-- 9 bits , centerpoint X ( 0 to 320 )
     1 111 1111 <-- 9 bits , centerpoint Y
     1 111 1111 <-- 8 bits , radius ( NOT AN X|Y thing)
     
     9+9+8 == 26 bits...
     
    What if centerpoint was amongst the entire renderable
    space so that we could make a larger magic kyoot ball?
    960x960 grid... 960 rounded up to nearest pow2 is 1024
    
    10 bits : Centerpoint X
    10 bits : Centerpoint Y
    10 bits : Radius, might as well make it 10 bits too.
     2 bits : Material

     
*** **************************************************** **/
    
     
     
     
     
     
     
     
     
     
     
     
     