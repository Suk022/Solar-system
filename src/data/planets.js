import mercuryTexture from '../assets/textures/mercury.jpg';
import venusTexture from '../assets/textures/venus.jpg';
import earthTexture from '../assets/textures/earth.jpg';
import marsTexture from '../assets/textures/mars.jpg';
import jupiterTexture from '../assets/textures/jupiter.jpg';
import saturnTexture from '../assets/textures/saturn.jpg';
import uranusTexture from '../assets/textures/uranus.jpg';
import neptuneTexture from '../assets/textures/neptune.jpg';
import sunTexture from '../assets/textures/sun.jpg';

const planets = [
  {
    name: "Sun",
    color: "#FFD700",
    size: 5,
    orbitRadius: 0,
    orbitSpeed: 0,
    texture: sunTexture,
    description: "The Sun is the star at the center of our solar system, a massive ball of hydrogen and helium that provides light, heat, and energy to all the planets orbiting around it. It contains 99.86% of the solar system's mass and is so large that about 1.3 million Earths could fit inside it. The Sun's surface, called the photosphere, is a seething cauldron of plasma with temperatures around 10,000°F (5,500°C), while its core reaches an incredible 27 million°F (15 million°C) where nuclear fusion occurs. This fusion process converts hydrogen into helium, releasing enormous amounts of energy that travel through space as light and heat, sustaining life on Earth and driving the weather systems of all the planets.",
    facts: [
      "The Sun is our solar system's only star - a massive ball of hydrogen and helium undergoing constant nuclear fusion. It contains 99.86% of the solar system's mass and provides the energy that sustains life on Earth.",
      "The Sun's surface temperature is about 10,000°F (5,500°C), while its core reaches an incredible 27 million°F (15 million°C)."
    ],
    distanceFromSun: { km: 0, au: 0 },
    orbitalPeriod: 0,
    numMoons: 0,
    surfaceTemp: { c: 5505, k: 5778 },
    funFact: "The Sun's energy output in one second is equal to 1 trillion megaton bombs!",
    physicalCharacteristics: {
      diameter: "1.39 million km",
      mass: "1.989 × 10³⁰ kg",
      gravity: "274 m/s²",
      density: "1.41 g/cm³"
    },
    atmosphere: {
      composition: "Hydrogen (74.9%), Helium (23.8%)",
      pressure: "N/A"
    },
    surface: {
      features: "Sunspots, Solar flares, Prominences",
      temperature: "5,500°C surface, 15 million°C core"
    },
    internalStructure: {
      core: "Core, Radiative Zone, Convective Zone, Photosphere",
      details: "Nuclear fusion occurs in the core"
    },
    exploration: {
      missions: ["SOHO", "Parker Solar Probe", "Solar Orbiter"],
      discoveries: "First observation of solar wind, corona structure"
    },
    culturalImpact: {
      ancientCultures: "Worshipped as a deity in many ancient cultures - Ra in Egyptian mythology, Helios in Greek mythology, Surya in Hindu mythology, and Amaterasu in Japanese mythology",
      mythology: "The Sun has been central to human mythology and religion throughout history, representing life, power, and divine authority",
      symbolism: "Universal symbol of life, power, time, and renewal across cultures and civilizations",
      scientificSignificance: "Understanding the Sun is crucial for space weather prediction and protecting Earth's technology and astronauts"
    }
  },
  {
    name: "Mercury",
    color: "#b1b1b1",
    size: 0.7,
    orbitRadius: 10,
    orbitSpeed: 1.6,
    texture: mercuryTexture,
    description: "Mercury is the smallest and innermost planet in our solar system, orbiting closest to the Sun at an average distance of 36 million miles (58 million kilometers). Despite its proximity to our star, Mercury is not the hottest planet - that distinction belongs to Venus. Mercury's surface resembles our Moon, covered with impact craters, ancient lava flows, and dramatic cliffs called scarps that formed as the planet's core cooled and contracted. The planet has no atmosphere to speak of, only a thin exosphere of atoms blasted off its surface by solar radiation. Mercury's most remarkable feature is its extreme temperature variations: while the side facing the Sun can reach 800°F (427°C), the dark side plunges to -290°F (-180°C). A day on Mercury lasts 59 Earth days, while its year takes only 88 Earth days, making it the fastest planet in our solar system.",
    facts: [
      "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.",
      "It is the fastest planet, zipping around the Sun every 88 Earth days."
    ],
    distanceFromSun: { km: 57.9, au: 0.39 },
    orbitalPeriod: 88,
    numMoons: 0,
    surfaceTemp: { c: 167, k: 440 },
    funFact: "A day on Mercury is longer than its year! One solar day (sunrise to sunrise) on Mercury is 176 Earth days.",
    physicalCharacteristics: {
      diameter: "4,879 km",
      mass: "3.30 × 10²³ kg",
      gravity: "3.7 m/s²",
      density: "5.43 g/cm³"
    },
    atmosphere: {
      composition: "Oxygen (42%), Sodium (29%), Hydrogen (22%)",
      pressure: "Trace amounts (thin exosphere)"
    },
    surface: {
      features: "Heavily cratered, scarps (cliffs), Caloris Basin",
      temperature: "-180°C to 430°C"
    },
    internalStructure: {
      core: "Large metallic core (85% of radius)",
      details: "The core is surprisingly large and partially molten, generating a weak magnetic field."
    },
    exploration: {
      missions: ["Mariner 10", "MESSENGER", "BepiColombo"],
      discoveries: "Water ice in permanently shadowed polar craters, and a surprising magnetic field."
    },
    culturalImpact: {
      ancientCultures: "Named for the Roman messenger god, Mercury was known to ancient civilizations and observed for millennia",
      mythology: "In Roman mythology, Mercury was the messenger of the gods, associated with communication, travel, and commerce. In Greek mythology, he was known as Hermes",
      symbolism: "Associated with speed, communication, intellect, and swiftness due to its rapid orbit around the Sun",
      scienceFiction: "Often featured in science fiction, typically as a planet with extreme temperature variations and a base for solar research",
      scientificSignificance: "Studying Mercury helps scientists understand planetary formation and the history of the inner solar system, particularly how planets respond to intense solar radiation"
    }
  },
  {
    name: "Venus",
    color: "#e6c07b",
    size: 1.1,
    orbitRadius: 14,
    orbitSpeed: 1.2,
    texture: venusTexture,
    description: "Venus is Earth's closest planetary neighbor and often called its 'sister planet' due to their similar size, mass, and composition. However, Venus is a world of extremes that makes it inhospitable to life as we know it. The planet is shrouded in thick clouds of sulfuric acid that reflect sunlight, making it the brightest object in our night sky after the Moon. Beneath these clouds lies a surface hot enough to melt lead, with temperatures averaging 864°F (462°C) due to a runaway greenhouse effect. Venus's atmosphere is 90 times denser than Earth's and composed mostly of carbon dioxide, creating crushing pressure equivalent to being 3,000 feet underwater. The planet rotates backwards compared to most other planets, with a day lasting 243 Earth days - longer than its 225-day year. Venus's surface is dominated by volcanic plains, with thousands of volcanoes and evidence of recent volcanic activity.",
    facts: [
      "Venus is often called Earth's sister planet due to their similar size and mass. However, its thick atmosphere creates a runaway greenhouse effect, making it the hottest planet in our solar system.",
      "The planet rotates backwards compared to most other planets and has a day longer than its year."
    ],
    distanceFromSun: { km: 108.2, au: 0.72 },
    orbitalPeriod: 225,
    numMoons: 0,
    surfaceTemp: { c: 464, k: 737 },
    funFact: "Venus spins backwards compared to most other planets!",
    physicalCharacteristics: {
      diameter: "12,104 km",
      mass: "4.87 × 10²⁴ kg",
      gravity: "8.87 m/s²",
      density: "5.24 g/cm³"
    },
    atmosphere: {
      composition: "CO₂ (96.5%), N₂ (3.5%)",
      pressure: "92 atm"
    },
    surface: {
      features: "Volcanic plains, mountains, impact craters",
      temperature: "462°C average"
    },
    internalStructure: {
      core: "Iron core, rocky mantle",
      details: "Similar in structure to Earth"
    },
    exploration: {
      missions: ["Magellan", "Venus Express", "Akatsuki"],
      discoveries: "Volcanic activity, extreme greenhouse effect"
    },
    culturalImpact: {
      ancientCultures: "Known since antiquity as the 'morning star' and 'evening star', it was named after the Roman goddess of love and beauty",
      mythology: "In Roman mythology, Venus was the goddess of love, beauty, and fertility. In Greek mythology, she was known as Aphrodite. Many cultures associated Venus with femininity and romance",
      symbolism: "Symbol of love, beauty, and femininity across many cultures. Its brightness made it one of the most important celestial objects in ancient astronomy",
      scienceFiction: "A frequent subject in science fiction, often depicted before the 20th century as a tropical paradise, a view shattered by the discovery of its true hellish environment",
      scientificSignificance: "Its extreme greenhouse effect serves as a critical case study for understanding climate change on Earth"
    }
  },
  {
    name: "Earth",
    color: "#3a9efd",
    size: 1.2,
    orbitRadius: 18,
    orbitSpeed: 1.0,
    texture: earthTexture,
    description: "Earth is our home planet, the third world from the Sun and the only known planet to harbor life. It's the largest of the four terrestrial planets and the only one with liquid water on its surface. Earth's atmosphere, rich in oxygen and nitrogen, provides the perfect conditions for life as we know it, while its magnetic field protects us from harmful solar radiation. The planet's surface is a dynamic mosaic of continents and oceans, constantly reshaped by plate tectonics, weathering, and erosion. Earth's moderate temperature range, from -128°F (-89°C) to 134°F (57°C), allows water to exist in all three states: solid, liquid, and gas. This water cycle, combined with Earth's 23.5-degree axial tilt, creates the seasons and weather patterns that sustain diverse ecosystems. Earth's single natural satellite, the Moon, stabilizes our planet's rotation and creates the tides that have shaped coastal environments for billions of years.",
    facts: [
      "Earth is the only known planet to support life, with millions of species of plants, animals, and microorganisms.",
      "It's the only planet not named after a Greek or Roman god - the name comes from Old English and Germanic words meaning 'ground'.",
      "Earth has one natural satellite, the Moon, which is the fifth largest moon in the solar system.",
      "The planet's magnetic field protects life from harmful solar radiation and cosmic rays.",
      "Earth's atmosphere contains 21% oxygen, essential for most forms of life.",
      "It's the densest planet in the solar system and the largest of the four terrestrial planets."
    ],
    distanceFromSun: { km: 149.6, au: 1.0 },
    orbitalPeriod: 365.25,
    numMoons: 1,
    surfaceTemp: { c: 15, k: 288 },
    funFact: "Earth is the only planet not named after a god or goddess!",
    physicalCharacteristics: {
      diameter: "12,742 km",
      mass: "5.97 × 10²⁴ kg",
      gravity: "9.81 m/s²",
      density: "5.51 g/cm³",
      rotationPeriod: "23 hours, 56 minutes",
      lengthOfDay: "24 hours",
      axialTilt: "23.5°"
    },
    atmosphere: {
      composition: "Nitrogen (78.08%), Oxygen (20.95%), Argon (0.93%), Carbon Dioxide (0.04%), with traces of other gases",
      pressure: "1 atm at sea level",
      layers: "Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere",
      greenhouseEffect: "Natural greenhouse effect maintains Earth's average temperature at about 15°C"
    },
    surface: {
      features: "71% covered by oceans, 29% land including continents, islands, mountains, deserts, and polar ice caps",
      temperature: "-88°C to 58°C (recorded extremes)",
      highestPoint: "Mount Everest (8,848 m)",
      lowestPoint: "Mariana Trench (-11,034 m)",
      waterDistribution: "97% saltwater, 3% freshwater (mostly ice)"
    },
    internalStructure: {
      core: "Solid inner core (iron-nickel), liquid outer core (iron-nickel), mantle (silicate rock), crust (continental and oceanic)",
      details: "Only planet with active plate tectonics, which recycle the crust and create mountains, volcanoes, and earthquakes",
      magneticField: "Generated by the movement of molten iron in the outer core"
    },
    exploration: {
      missions: ["International Space Station", "Hubble Space Telescope", "GPS constellation", "Various Earth observation satellites"],
      discoveries: "Ozone layer depletion and recovery, climate change patterns, ocean circulation, atmospheric composition changes",
      spacePrograms: "NASA, ESA, Roscosmos, CNSA, ISRO, JAXA"
    },
    culturalImpact: {
      ancientCultures: "Known as Gaia in Greek mythology, Terra in Roman mythology, and revered as Mother Earth in many indigenous cultures",
      mythology: "In Greek mythology, Gaia was the primordial goddess of Earth, mother of all life. In Roman mythology, Terra was the goddess of the Earth. Many cultures personify Earth as a nurturing mother figure",
      symbolism: "Universal symbol of home, life, and fertility. Often represented as a mother figure nurturing all living things",
      scienceFiction: "Often depicted as the cradle of humanity and a paradise compared to other worlds in science fiction",
      scientificSignificance: "Serves as the baseline for understanding other planets and the search for extraterrestrial life"
    }
  },
  {
    name: "Mars",
    color: "#c1440e",
    size: 1.0,
    orbitRadius: 22,
    orbitSpeed: 0.8,
    texture: marsTexture,
    description: "Mars, the Red Planet, is the fourth world from the Sun and humanity's next great frontier in space exploration. Its rusty red color comes from iron oxide (rust) in its soil, giving it the nickname 'Red Planet.' Mars is a cold, desert world with a thin atmosphere that cannot support human life as we know it, but evidence suggests it was once much warmer and wetter, with rivers, lakes, and possibly even an ocean covering much of its northern hemisphere. The planet boasts the largest volcano in the solar system, Olympus Mons, which stands three times taller than Mount Everest, and the deepest canyon, Valles Marineris, which could stretch from New York to Los Angeles. Mars has two small moons, Phobos and Deimos, thought to be captured asteroids. The planet experiences dust storms that can cover the entire globe and last for months. Today, Mars is the most explored planet beyond Earth, with multiple rovers and orbiters studying its geology, climate, and potential for past or present life.",
    facts: [
      "Mars has the largest volcano in the solar system, Olympus Mons, which is three times taller than Mount Everest.",
      "The planet has the deepest canyon, Valles Marineris, which could stretch from New York to Los Angeles.",
      "Mars has two small moons, Phobos and Deimos, which are thought to be captured asteroids.",
      "Evidence suggests Mars once had rivers, lakes, and possibly an ocean covering much of its northern hemisphere.",
      "The planet experiences dust storms that can cover the entire globe and last for months.",
      "Mars has seasons like Earth, but they last twice as long due to its longer year."
    ],
    distanceFromSun: { km: 227.9, au: 1.52 },
    orbitalPeriod: 687,
    numMoons: 2,
    surfaceTemp: { c: -63, k: 210 },
    funFact: "Olympus Mons on Mars is three times taller than Mount Everest!",
    physicalCharacteristics: {
      diameter: "6,779 km",
      mass: "6.39 × 10²³ kg",
      gravity: "3.721 m/s²",
      density: "3.93 g/cm³",
      rotationPeriod: "24 hours, 37 minutes",
      lengthOfDay: "24 hours, 39 minutes",
      axialTilt: "25.2°"
    },
    atmosphere: {
      composition: "Carbon Dioxide (95.3%), Nitrogen (2.7%), Argon (1.6%), with traces of oxygen, carbon monoxide, and water vapor",
      pressure: "0.006 atm (less than 1% of Earth's)",
      layers: "Lower atmosphere, middle atmosphere, upper atmosphere",
      greenhouseEffect: "Weak greenhouse effect due to thin atmosphere"
    },
    surface: {
      features: "Olympus Mons (largest volcano), Valles Marineris (largest canyon), polar ice caps, impact craters, sand dunes, ancient river valleys",
      temperature: "20°C to -140°C (average -63°C)",
      highestPoint: "Olympus Mons (21.9 km)",
      lowestPoint: "Hellas Planitia (-8.2 km)",
      waterIce: "Polar ice caps contain water ice and carbon dioxide ice"
    },
    internalStructure: {
      core: "Iron-rich core (radius approximately 1,794 km), silicate mantle, crust",
      details: "Core is likely partially molten, generating a weak magnetic field",
      magneticField: "Weak, patchy magnetic field suggesting the core may have cooled significantly"
    },
    exploration: {
      missions: ["Perseverance", "Curiosity", "InSight", "Opportunity", "Spirit", "Sojourner", "Viking 1 & 2"],
      discoveries: "Evidence of past liquid water, organic molecules, seasonal methane releases, ancient river deltas",
      futureMissions: "Planned human missions, sample return missions, and continued robotic exploration"
    },
    culturalImpact: {
      ancientCultures: "Named after the Roman god of war due to its red color, associated with blood and conflict",
      mythology: "In Roman mythology, Mars was the god of war, agriculture, and fertility. In Greek mythology, he was known as Ares. The planet's red color reminded ancient observers of blood and warfare",
      symbolism: "Symbol of war, aggression, and masculine energy. Its red color has been associated with blood, fire, and conflict throughout history",
      scienceFiction: "A popular setting in science fiction, from H.G. Wells' 'War of the Worlds' to modern films like 'The Martian'",
      scientificSignificance: "Key target for astrobiology research and potential future human colonization"
    }
  },
  {
    name: "Jupiter",
    color: "#e3c07b",
    size: 2.5,
    orbitRadius: 28,
    orbitSpeed: 0.5,
    texture: jupiterTexture,
    description: "Jupiter is the largest planet in our solar system, a massive gas giant that contains more than twice the mass of all the other planets combined. This colossal world is composed primarily of hydrogen and helium, similar to the composition of the Sun, though not massive enough to become a star. Jupiter's most famous feature is the Great Red Spot, a giant storm that has been raging for at least 400 years and is large enough to fit three Earths inside it. The planet's atmosphere is a dynamic tapestry of colorful bands and zones created by powerful jet streams moving at hundreds of miles per hour. Jupiter has a strong magnetic field, 14 times stronger than Earth's, which creates spectacular auroras at its poles. The planet has at least 95 moons, including the four large Galilean moons - Io, Europa, Ganymede, and Callisto - discovered by Galileo in 1610. Jupiter's rapid rotation, completing a day in just under 10 hours, causes it to bulge at the equator and creates the fastest winds in the solar system.",
    facts: [
      "Jupiter is the largest planet in the solar system, with a mass more than twice that of all the other planets combined.",
      "The Great Red Spot is a giant storm that has been raging for at least 400 years and could fit three Earths inside it.",
      "Jupiter has at least 95 moons, with the four largest (Io, Europa, Ganymede, and Callisto) discovered by Galileo in 1610.",
      "The planet rotates faster than any other planet, completing a day in just under 10 hours.",
      "Jupiter's magnetic field is the strongest of any planet in the solar system, 14 times stronger than Earth's.",
      "Despite its size, Jupiter is the fastest rotating planet, causing it to bulge at the equator and creating the fastest winds in the solar system."
    ],
    distanceFromSun: { km: 778.5, au: 5.20 },
    orbitalPeriod: 4333,
    numMoons: 95,
    surfaceTemp: { c: -110, k: 163 },
    funFact: "Jupiter's Great Red Spot could fit three Earths inside it!",
    physicalCharacteristics: {
      diameter: "139,820 km",
      mass: "1.90 × 10²⁷ kg",
      gravity: "24.79 m/s²",
      density: "1.33 g/cm³",
      rotationPeriod: "9 hours, 56 minutes",
      lengthOfDay: "9 hours, 56 minutes",
      axialTilt: "3.1°"
    },
    atmosphere: {
      composition: "Hydrogen (90%), Helium (10%), with traces of methane, ammonia, water vapor, and other compounds",
      pressure: "No solid surface, pressure increases with depth",
      layers: "Upper atmosphere, troposphere, stratosphere, thermosphere",
      bands: "Alternating light and dark bands caused by different wind speeds and directions"
    },
    surface: {
      features: "Colorful bands, Great Red Spot, white ovals, brown barges, no solid surface",
      temperature: "-110°C (cloud top level)",
      storms: "Numerous storms including the Great Red Spot, white ovals, and brown barges",
      cloudLayers: "Multiple cloud layers at different altitudes with different compositions"
    },
    internalStructure: {
      core: "Rocky core (possibly 10-15 Earth masses), surrounded by metallic hydrogen, then liquid hydrogen",
      details: "No solid surface, gradually transitions from gas to liquid to metallic hydrogen with depth",
      magneticField: "Generated by the movement of metallic hydrogen in the outer core"
    },
    exploration: {
      missions: ["Voyager 1 & 2", "Galileo", "Juno", "Cassini", "New Horizons"],
      discoveries: "Complex atmospheric dynamics, powerful magnetic field, volcanic activity on Io, subsurface ocean on Europa",
      currentMission: "Juno spacecraft studying Jupiter's atmosphere, magnetic field, and internal structure"
    },
    culturalImpact: {
      ancientCultures: "Named after the Roman king of the gods, Jupiter was known to ancient civilizations and associated with power and authority",
      mythology: "In Roman mythology, Jupiter was the king of the gods, ruler of the sky and thunder. In Greek mythology, he was known as Zeus. He was associated with justice, law, and divine authority",
      symbolism: "Symbol of power, authority, and divine kingship. Its size and brightness made it a prominent symbol of strength and leadership",
      scienceFiction: "Frequently featured in science fiction as a gas giant with floating cities or as a backdrop for space adventures",
      scientificSignificance: "Studying Jupiter helps scientists understand gas giant formation and the early solar system"
    }
  },
  {
    name: "Saturn",
    color: "#f7e7b4",
    size: 2.1,
    orbitRadius: 34,
    orbitSpeed: 0.4,
    texture: saturnTexture,
    description: "Saturn is the sixth planet from the Sun and the second largest in our solar system, famous for its spectacular ring system that makes it one of the most recognizable objects in space. These rings, made mostly of ice particles, rocky debris, and dust, extend up to 175,000 miles (282,000 kilometers) from the planet but are only about 30 feet (10 meters) thick on average. Saturn is the least dense planet in the solar system - it's so light that it could float in water if there were an ocean large enough to hold it. The planet's atmosphere is similar to Jupiter's, with bands of clouds and storms, but Saturn's most unique feature is the hexagonal storm at its north pole, a six-sided jet stream that has puzzled scientists for decades. Saturn has 146 confirmed moons, with Titan being the largest and most interesting due to its thick atmosphere and lakes of liquid methane. The planet's beautiful rings are constantly changing, with new ringlets forming and old ones disappearing as the ice particles orbit the planet.",
    facts: [
      "Saturn's rings are made mostly of ice particles, with some rock and dust, and are only about 10 meters thick on average.",
      "The planet has 146 confirmed moons, with Titan being the largest and most interesting due to its thick atmosphere.",
      "Saturn is the least dense planet in the solar system - it could float in water if there were an ocean large enough.",
      "The planet has a hexagonal storm at its north pole, a unique feature not seen on any other planet.",
      "Saturn's rings extend up to 175,000 kilometers from the planet but are only about 10 meters thick.",
      "The planet rotates so fast that it bulges at the equator and is flattened at the poles."
    ],
    distanceFromSun: { km: 1434, au: 9.58 },
    orbitalPeriod: 10759,
    numMoons: 146,
    surfaceTemp: { c: -140, k: 133 },
    funFact: "Saturn's rings are only about 10 meters thick on average!",
    physicalCharacteristics: {
      diameter: "116,460 km",
      mass: "5.68 × 10²⁶ kg",
      gravity: "10.44 m/s²",
      density: "0.69 g/cm³",
      rotationPeriod: "10 hours, 34 minutes",
      lengthOfDay: "10 hours, 34 minutes",
      axialTilt: "26.7°"
    },
    atmosphere: {
      composition: "Hydrogen (96.3%), Helium (3.25%), with traces of methane, ammonia, and other compounds",
      pressure: "No solid surface, pressure increases with depth",
      layers: "Upper atmosphere, troposphere, stratosphere, thermosphere",
      bands: "Fainter bands than Jupiter, with subtle color variations"
    },
    surface: {
      features: "Spectacular ring system, hexagonal polar storm, no solid surface",
      temperature: "-178°C (cloud top level)",
      storms: "Hexagonal storm at north pole, occasional storms in atmosphere",
      cloudLayers: "Multiple cloud layers similar to Jupiter but less prominent"
    },
    internalStructure: {
      core: "Rocky core, surrounded by liquid metallic hydrogen, then liquid hydrogen",
      details: "Similar structure to Jupiter but less massive, no solid surface",
      magneticField: "Generated by the movement of metallic hydrogen in the outer core"
    },
    exploration: {
      missions: ["Voyager 1 & 2", "Cassini-Huygens", "Pioneer 11"],
      discoveries: "Complex ring structure, lakes of liquid methane on Titan, subsurface ocean on Enceladus",
      cassiniLegacy: "Cassini mission provided unprecedented views of Saturn's rings and moons over 13 years"
    },
    culturalImpact: {
      ancientCultures: "Named after the Roman god of agriculture and time, Saturn was associated with harvest and the passage of time",
      mythology: "In Roman mythology, Saturn was the god of agriculture, wealth, and time. In Greek mythology, he was known as Cronus. He was associated with the Golden Age and was overthrown by his son Jupiter",
      symbolism: "Symbol of time, harvest, and the cyclical nature of life. The planet's rings have been interpreted as symbols of cosmic order and beauty",
      scienceFiction: "Often depicted in science fiction with its iconic rings, from classic literature to modern films",
      scientificSignificance: "Studying Saturn's rings helps scientists understand disk formation around stars and planets"
    }
  },
  {
    name: "Uranus",
    color: "#7de2e6",
    size: 1.7,
    orbitRadius: 40,
    orbitSpeed: 0.3,
    texture: uranusTexture,
    description: "Uranus is the seventh planet from the Sun and the first of the ice giants, a category of planets distinct from the gas giants Jupiter and Saturn. This distant world is unique among planets as it rotates on its side, with an axial tilt of 98 degrees, likely caused by a massive collision with an Earth-sized object early in its history. This extreme tilt gives Uranus the most extreme seasons in the solar system, with each pole experiencing 42 years of continuous sunlight followed by 42 years of darkness. Uranus has a pale blue-green color due to methane gas in its atmosphere, which absorbs red light and reflects blue-green light. The planet has 27 known moons, all named after characters from the works of William Shakespeare and Alexander Pope. Uranus also has 13 faint rings, discovered in 1977, which are much darker and less prominent than Saturn's spectacular ring system. The planet's magnetic field is tilted 60 degrees from its rotation axis, creating a complex magnetosphere that scientists are still studying.",
    facts: [
      "Uranus rotates on its side with an axial tilt of 98 degrees, likely caused by a massive collision early in its history.",
      "The planet has 27 known moons, all named after characters from the works of William Shakespeare and Alexander Pope.",
      "Uranus has the coldest planetary atmosphere in the solar system, with temperatures reaching -224°C.",
      "The planet has 13 faint rings, discovered in 1977, which are much darker and less prominent than Saturn's.",
      "Uranus takes 84 Earth years to orbit the Sun, meaning each season lasts about 21 years.",
      "The planet's magnetic field is tilted 60 degrees from its rotation axis, creating a complex magnetosphere."
    ],
    distanceFromSun: { km: 2871, au: 19.18 },
    orbitalPeriod: 30687,
    numMoons: 27,
    surfaceTemp: { c: -195, k: 78 },
    funFact: "Uranus has the coldest planetary atmosphere in the solar system!",
    physicalCharacteristics: {
      diameter: "50,724 km",
      mass: "8.68 × 10²⁵ kg",
      gravity: "8.69 m/s²",
      density: "1.27 g/cm³",
      rotationPeriod: "17 hours, 14 minutes",
      lengthOfDay: "17 hours, 14 minutes",
      axialTilt: "97.8°"
    },
    atmosphere: {
      composition: "Hydrogen (83%), Helium (15%), Methane (2.3%), with traces of other hydrocarbons",
      pressure: "No solid surface, pressure increases with depth",
      layers: "Upper atmosphere, troposphere, stratosphere, thermosphere",
      methane: "Methane absorbs red light, giving Uranus its blue-green color"
    },
    surface: {
      features: "Bland appearance with few visible features, faint rings, no solid surface",
      temperature: "-224°C (cloud top level)",
      storms: "Occasional storms and cloud features, but much less active than Jupiter or Saturn",
      cloudLayers: "Multiple cloud layers including methane ice clouds"
    },
    internalStructure: {
      core: "Rocky core, surrounded by icy mantle (water, ammonia, methane), then gaseous atmosphere",
      details: "Unlike Jupiter and Saturn, Uranus has more ice and less hydrogen in its composition",
      magneticField: "Tilted magnetic field suggesting the core may be offset from the planet's center"
    },
    exploration: {
      missions: ["Voyager 2"],
      discoveries: "Tilted magnetic field, complex ring system, extreme axial tilt, cold atmosphere",
      futureMissions: "Proposed missions to study Uranus and Neptune in detail"
    },
    culturalImpact: {
      ancientCultures: "Named after the Greek god of the sky, Uranus was the father of Saturn and grandfather of Jupiter in Roman mythology",
      mythology: "In Greek mythology, Uranus was the primordial god of the sky, husband of Gaia (Earth) and father of the Titans. He was castrated and overthrown by his son Cronus (Saturn)",
      symbolism: "Associated with the heavens, innovation, and the cosmic order. Its discovery in 1781 marked the first planet found with a telescope",
      scienceFiction: "Less frequently featured in science fiction due to its distance and bland appearance",
      scientificSignificance: "Studying Uranus helps scientists understand ice giant formation and planetary evolution"
    }
  },
  {
    name: "Neptune",
    color: "#4062bb",
    size: 1.6,
    orbitRadius: 46,
    orbitSpeed: 0.2,
    texture: neptuneTexture,
    description: "Neptune is the eighth and farthest planet from the Sun, the last of the ice giants and the most distant world in our solar system. This deep blue planet was the first to be discovered through mathematical calculations rather than observation, when astronomers noticed that Uranus's orbit was being perturbed by an unknown gravitational force. Neptune is the windiest planet in the solar system, with wind speeds reaching 1,200 miles per hour (2,100 kilometers per hour), faster than the speed of sound on Earth. The planet has a Great Dark Spot similar to Jupiter's Great Red Spot, though this storm appears and disappears periodically. Neptune's deep blue color comes from methane in its atmosphere, which absorbs red light and reflects blue light, giving it a richer blue hue than Uranus. The planet has 16 known moons, with Triton being the largest and most interesting - it orbits backwards and is likely a captured dwarf planet from the Kuiper Belt. Neptune takes 165 Earth years to complete one orbit around the Sun, meaning it has completed only one orbit since its discovery in 1846.",
    facts: [
      "Neptune is the windiest planet in the solar system, with wind speeds reaching 2,100 kilometers per hour.",
      "The planet was discovered through mathematical calculations by Urbain Le Verrier and Johann Galle in 1846.",
      "Neptune has 16 known moons, with Triton being the largest and most interesting - it orbits backwards and is likely a captured dwarf planet.",
      "The planet has a Great Dark Spot similar to Jupiter's Great Red Spot, but it appears and disappears periodically.",
      "Neptune takes 165 Earth years to orbit the Sun, meaning it has completed only one orbit since its discovery.",
      "The planet's magnetic field is tilted 47 degrees from its rotation axis, creating a complex magnetosphere."
    ],
    distanceFromSun: { km: 4495, au: 30.07 },
    orbitalPeriod: 60190,
    numMoons: 16,
    surfaceTemp: { c: -200, k: 73 },
    funFact: "Neptune's moon Triton orbits backwards and is likely a captured dwarf planet!",
    physicalCharacteristics: {
      diameter: "49,244 km",
      mass: "1.02 × 10²⁶ kg",
      gravity: "11.15 m/s²",
      density: "1.64 g/cm³",
      rotationPeriod: "16 hours, 6 minutes",
      lengthOfDay: "16 hours, 6 minutes",
      axialTilt: "28.3°"
    },
    atmosphere: {
      composition: "Hydrogen (80%), Helium (19%), Methane (1.5%), with traces of other hydrocarbons",
      pressure: "No solid surface, pressure increases with depth",
      layers: "Upper atmosphere, troposphere, stratosphere, thermosphere",
      methane: "Methane absorbs red light, giving Neptune its deep blue color"
    },
    surface: {
      features: "Great Dark Spot, high-speed winds, faint rings, no solid surface",
      temperature: "-220°C (cloud top level)",
      storms: "Great Dark Spot and other storm systems, but less prominent than Jupiter's",
      cloudLayers: "Multiple cloud layers including methane ice clouds"
    },
    internalStructure: {
      core: "Rocky core, surrounded by icy mantle (water, ammonia, methane), then gaseous atmosphere",
      details: "Similar structure to Uranus but more active, with stronger winds and more dynamic weather",
      magneticField: "Tilted magnetic field similar to Uranus, suggesting similar internal structure"
    },
    exploration: {
      missions: ["Voyager 2"],
      discoveries: "Great Dark Spot, powerful winds, complex ring system, retrograde moon Triton",
      futureMissions: "Proposed missions to study Neptune and its moons in detail"
    },
    culturalImpact: {
      ancientCultures: "Named after the Roman god of the sea, Neptune was not known to ancient civilizations as it's too faint to see with the naked eye",
      mythology: "In Roman mythology, Neptune was the god of the sea, earthquakes, and horses. In Greek mythology, he was known as Poseidon. He was one of the three brothers who ruled the world (Jupiter-sky, Pluto-underworld, Neptune-sea)",
      symbolism: "Associated with the deep sea, mystery, and exploration. Its blue color and discovery through mathematics symbolize the power of human intellect",
      scienceFiction: "Sometimes featured in science fiction as a mysterious, distant world",
      scientificSignificance: "Studying Neptune helps scientists understand the outer solar system and ice giant formation"
    }
  }
];

export default planets; 