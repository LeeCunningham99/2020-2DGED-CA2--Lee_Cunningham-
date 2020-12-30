/***************************************** Sprite Sheet Position & Animation Data ************************************************************************************************/

/**
 * Class to store together all sprite data for space invaders
 */
class SpriteData {

//#region Sprite Data
static RUNNER_START_POSITION = new Vector2(90, 660);
static RUNNER_MOVE_KEYS = [Keys.A, Keys.D, Keys.Space, Keys.Enter];
static RUNNER_RUN_VELOCITY = 0.1;
static RUNNER_JUMP_VELOCITY = 0.5;

static RUNNER_ANIMATION_DATA = Object.freeze({
  id: "runner_animation_data",
  spriteSheet: document.getElementById("CharacterSpriteSheet"),
  actorType: ActorType.Player,
  alpha: 1,
  takes: {  
    "run_right" :  {       
      fps: 12,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 5,
      boundingBoxDimensions: new Vector2(40, 60), //notice I choose the largest of all the widths taken from the cellData array below
      cellData: [
        new Rect(30, 110, 50, 70),
        new Rect(95, 110, 50, 70),
        new Rect(155, 110, 50, 70),
        new Rect(210, 110, 50, 70),
        new Rect(270, 110, 50, 70),
        new Rect(330, 110, 50, 70)

        //new Rect(96, 24, 46, 54),
        //new Rect(45, 24, 35, 54),
        //new Rect(0, 24, 35, 54)
      ]
    },
    "run_left" : {     
      fps: 12,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 5,
      boundingBoxDimensions: new Vector2(40, 60), //notice I choose the largest of all the widths taken from the cellData array below
      cellData: [
        new Rect(30, 195, 50, 70),
        new Rect(95, 195, 50, 70),
        new Rect(155, 195, 50, 70),
        new Rect(210, 195, 50, 70),
        new Rect(270, 195, 50, 70),
        new Rect(330, 195, 50, 70)
      ]
    }
  }
});

static ENEMY_ANIMATION_DATA = Object.freeze({
  id: "enemy_animation_data",
  spriteSheet: document.getElementById("spritesheet_main"),
  alpha: 1,
  takes: {  
    "wasp_fly" :  {    
      fps: 16,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 2,
      boundingBoxDimensions: new Vector2(35, 50), 
      cellData: [
        new Rect(20, 234, 35, 50),
        new Rect(90, 234, 35, 50),
        new Rect(160, 234, 35, 50)
      ]
    }
  }
});

static COLLECTIBLES_ANIMATION_DATA = Object.freeze({
  id: "collectibles_animation_data",
  spriteSheet: document.getElementById("spritesheet_snowy"),
  alpha: 1,
  actorType: ActorType.Pickup,
  takes: {  
    "sapphire_glint" :  {
      fps: 6,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 4,
      boundingBoxDimensions: new Vector2(46, 50), 
      cellData: [
        new Rect(185, 138, 30, 35),
        new Rect(220, 138, 30, 35),
        new Rect(258, 138, 30, 35),
        new Rect(294, 138, 30, 35),
        new Rect(331, 138, 30, 35)
      ]
    },
    "ice_crystal" :  {
      fps: 6,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 1,
      boundingBoxDimensions: new Vector2(32, 26), 
      cellData: [
        new Rect(330, 20, 38, 30), 
        new Rect(361, 20, 25, 30)
      ]
    },
    "gold_glint" :  {
      fps: 6,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 2,
      boundingBoxDimensions: new Vector2(30, 30), 
      cellData: [
        new Rect(65, 540, 30, 30),
        new Rect(96, 540, 30, 30),
        new Rect(128, 540, 30, 30)
      ]
    }
  }
});

//Snowy block
static PLATFORM_DATA = Object.freeze({
  id: "platform",
  spriteSheet: document.getElementById("spritesheet_snowy"),
  sourcePosition: new Vector2(89, 1),
  sourceDimensions: new Vector2(39, 39),
  rotation: 0,
  scale: new Vector2(1, 1),
  origin: new Vector2(0, 0),
  alpha: 1,
  actorType: ActorType.Platform,
  translationArray: [
    //added spaces here so that you can easily see which grouping is which on screen
    //Snowy Hill
    new Vector2(100, 725),
    new Vector2(140, 685),
    new Vector2(180, 645),
    new Vector2(220, 685),
    new Vector2(260, 685),
    new Vector2(300, 725),
    new Vector2(340, 725),

    //Platform
    new Vector2(300, 645),
    new Vector2(375, 645),

    new Vector2(450, 600),
    new Vector2(500, 550),
    new Vector2(550, 550),  

    new Vector2(650, 500),
    new Vector2(700, 450),
    new Vector2(750, 450),
    new Vector2(800, 500),
    new Vector2(850, 550),
    new Vector2(900, 600),
    new Vector2(950, 550),

    new Vector2(350, 500),
    new Vector2(300, 400),
    new Vector2(250, 500),
    new Vector2(175, 500),
    new Vector2(50, 400),
    new Vector2(50, 600),


    //Floor so the player doesn't fall off the screen
    new Vector2(0, 765),
    new Vector2(39, 765),
    new Vector2(78, 765),
    new Vector2(117, 765),
    new Vector2(156, 765),
    new Vector2(195, 765),
    new Vector2(234, 765),
    new Vector2(273, 765),
    new Vector2(312, 765),
    new Vector2(351, 765),
    new Vector2(390, 765),
    new Vector2(429, 765),
    new Vector2(468, 765),
    new Vector2(507, 765),
    new Vector2(546, 765),
    new Vector2(585, 765),
    new Vector2(624, 765),
    new Vector2(663, 765),
    new Vector2(702, 765),
    new Vector2(741, 765),
    new Vector2(780, 765),
    new Vector2(819, 765),
    new Vector2(854, 765),
    new Vector2(897, 765),
    new Vector2(936, 765),
    new Vector2(975, 765),
    new Vector2(1014, 765),
  ]
});

static BACKGROUND_DATA = [
  {
    id: "background_1",
    spriteSheet: document.getElementById("background1"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(384, 216),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 1,
    scrollSpeedMultiplier: 0.2
  },

  {
  id: "background_2",
    spriteSheet: document.getElementById("background2"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(595, 595),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(0.3, 0.3),
    origin: new Vector2(-2300, -1930),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 1,
    scrollSpeedMultiplier: 0.2
  },

  {
    id: "background_3",
      spriteSheet: document.getElementById("background3"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(396, 512),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(0.15, 0.3),
      origin: new Vector2(-3800, -1900),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.2
    },

    {
      id: "background_4",
        spriteSheet: document.getElementById("background4"),
        sourcePosition: new Vector2(0, 0),
        sourceDimensions: new Vector2(190, 265),
        translation: new Vector2(0, 0),
        rotation: 0,
        scale: new Vector2(0.05, 0.1),
        origin: new Vector2(-9000, -6500),
        alpha: 1,
        actorType: ActorType.Background,
        layerDepth: 1,
        scrollSpeedMultiplier: 0.2
      },

      {
        id: "background_5",
          spriteSheet: document.getElementById("background5"),
          sourcePosition: new Vector2(0, 0),
          sourceDimensions: new Vector2(1210, 1591),
          translation: new Vector2(0, 0),
          rotation: 0,
          scale: new Vector2(0.1, 0.2),
          origin: new Vector2(-150, -3080),
          alpha: 1,
          actorType: ActorType.Background,
          layerDepth: 1,
          scrollSpeedMultiplier: 0.2
        },

        {
          id: "background_6",
            spriteSheet: document.getElementById("background6"),
            sourcePosition: new Vector2(89, 45),
            sourceDimensions: new Vector2(39, 39),
            translation: new Vector2(0, 0),
            rotation: 0,
            scale: new Vector2(0.09, 0.09),
            origin: new Vector2(-2300, -7800),
            alpha: 1,
            actorType: ActorType.Background,
            layerDepth: 1,
            scrollSpeedMultiplier: 0.2
          },

          {
            id: "background_7",
              spriteSheet: document.getElementById("background7"),
              sourcePosition: new Vector2(89, 45),
              sourceDimensions: new Vector2(39, 39),
              translation: new Vector2(0, 0),
              rotation: 0,
              scale: new Vector2(0.09, 0.09),
              origin: new Vector2(-1520, -7800),
              alpha: 1,
              actorType: ActorType.Background,
              layerDepth: 1,
              scrollSpeedMultiplier: 0.2
            },

            {
              id: "background_8",
                spriteSheet: document.getElementById("background8"),
                sourcePosition: new Vector2(89, 45),
                sourceDimensions: new Vector2(39, 39),
                translation: new Vector2(0, 0),
                rotation: 0,
                scale: new Vector2(0.09, 0.09),
                origin: new Vector2(-1520, -7600),
                alpha: 1,
                actorType: ActorType.Background,
                layerDepth: 1,
                scrollSpeedMultiplier: 0.2
              }

  
];
//#endregion

}
