?_CIRCLE_ORIGIN_TILES_? :======================================:

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
:======================================: ?_CIRCLE_ORIGIN_TILES_? 