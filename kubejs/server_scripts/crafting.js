settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

onEvent('recipes', event => {
    // REMOVING KUBEJS RECIPES
    event.remove({id: 'projecte:philosophers_stone'});
    event.remove({id: 'projecte:philosophers_stone_alt'});
    event.remove({id: 'projecte:transmutation_table'});
    event.remove({id: 'mining_dimension:teleporter'});
    event.remove({id: 'thermal:device_rock_gen'});

    // ADDING KUBEJS RECIPES
    event.shaped('projecte:transmutation_table', [
        'DAD',
        'ASA',
        'DAD'
        ], {
            A: 'compressium:andesite_9',
            D: 'kubejs:9_darkmatter',
            S: 'projecte:philosophers_stone'
        });

        event.shaped('mining_dimension:teleporter', [
            'CZC',
            'GPO',
            'CIC'
            ], {
                C: 'minecraft:charcoal',
                Z: 'minecraft:copper_ingot',
                G: 'minecraft:gold_ingot',
                P: 'mekanismtools:stone_paxel',
                O: 'mekanism:ingot_osmium',
                I: 'minecraft:iron_ingot'
            });


            event.shaped('kubejs:1_component', [
                'OGC',
                'RIS',
                'DTE'
                ], {
                    O: '#forge:ingots/osmium',
                    G: 'minecraft:gold_ingot',
                    C: 'minecraft:copper_ingot',
                    R: 'minecraft:redstone',
                    I: '#forge:gears/invar',
                    S: '#forge:ingots/steel',
                    D: 'minecraft:glowstone_dust',
                    T: '#forge:ingots/tin',
                    E: 'thermal:glowstone_bucket'
                });


                event.shaped('thermal:device_rock_gen', [
                    'CZC',
                    'GPO',
                    'CIC'
                    ], {
                        C: 'thermal:invar_ingot',
                        Z: 'thermal:constantan_gear',
                        G: 'minecraft:ice',
                        P: 'kubejs:1_component',
                        O: 'minecraft:magma_block',
                        I: 'thermal:redstone_servo'
                    });
        



    event.shaped('kubejs:1_glowstone', [
        'AAA',
        'AAA',
        'AAA'
        ], {
            A: 'minecraft:glowstone'
        });

        event.shaped('kubejs:2_glowstone', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:1_glowstone'
            });
            event.shaped('kubejs:3_glowstone', [
                'AAA',
                'AAA',
                'AAA'
                ], {
                    A: 'kubejs:2_glowstone'
                });
                event.shaped('kubejs:4_glowstone', [
                    'AAA',
                    'AAA',
                    'AAA'
                    ], {
                        A: 'kubejs:3_glowstone'
                    });
                    event.shaped('kubejs:5_glowstone', [
                        'AAA',
                        'AAA',
                        'AAA'
                        ], {
                            A: 'kubejs:4_glowstone'
                        });
                        event.shaped('kubejs:6_glowstone', [
                            'AAA',
                            'AAA',
                            'AAA'
                            ], {
                                A: 'kubejs:5_glowstone'
                            });
                            event.shaped('kubejs:7_glowstone', [
                                'AAA',
                                'AAA',
                                'AAA'
                                ], {
                                    A: 'kubejs:6_glowstone'
                                });
                                event.shaped('kubejs:8_glowstone', [
                                    'AAA',
                                    'AAA',
                                    'AAA'
                                    ], {
                                        A: 'kubejs:7_glowstone'
                                    });
                                    event.shaped('kubejs:9_glowstone', [
                                        'AAA',
                                        'AAA',
                                        'AAA'
                                        ], {
                                            A: 'kubejs:8_glowstone'
                                        });
    event.shaped('kubejs:1_glowstone', [
        'AAA',
        'AAA',
        'AAA'
        ], {
            A: 'minecraft:glowstone'
        });

        event.shaped('kubejs:2_glowstone', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:1_glowstone'
            });
            event.shaped('kubejs:3_glowstone', [
                'AAA',
                'AAA',
                'AAA'
                ], {
                    A: 'kubejs:2_glowstone'
                });
                event.shaped('kubejs:4_glowstone', [
                    'AAA',
                    'AAA',
                    'AAA'
                    ], {
                        A: 'kubejs:3_glowstone'
                    });
                    event.shaped('kubejs:5_glowstone', [
                        'AAA',
                        'AAA',
                        'AAA'
                        ], {
                            A: 'kubejs:4_glowstone'
                        });
                        event.shaped('kubejs:6_glowstone', [
                            'AAA',
                            'AAA',
                            'AAA'
                            ], {
                                A: 'kubejs:5_glowstone'
                            });
                            event.shaped('kubejs:7_glowstone', [
                                'AAA',
                                'AAA',
                                'AAA'
                                ], {
                                    A: 'kubejs:6_glowstone'
                                });
                                event.shaped('kubejs:8_glowstone', [
                                    'AAA',
                                    'AAA',
                                    'AAA'
                                    ], {
                                        A: 'kubejs:7_glowstone'
                                    });
                                    event.shaped('kubejs:9_glowstone', [
                                        'AAA',
                                        'AAA',
                                        'AAA'
                                        ], {
                                            A: 'kubejs:8_glowstone'
                                        });


event.shaped('kubejs:1_darkmatter', [
        'AAA',
        'AAA',
        'AAA'
        ], {
            A: 'projecte:dark_matter_block'
        });

        event.shaped('kubejs:2_darkmatter', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:1_darkmatter'
            });
            event.shaped('kubejs:3_darkmatter', [
                'AAA',
                'AAA',
                'AAA'
                ], {
                    A: 'kubejs:2_darkmatter'
                });
                event.shaped('kubejs:4_darkmatter', [
                    'AAA',
                    'AAA',
                    'AAA'
                    ], {
                        A: 'kubejs:3_darkmatter'
                    });
                    event.shaped('kubejs:5_darkmatter', [
                        'AAA',
                        'AAA',
                        'AAA'
                        ], {
                            A: 'kubejs:4_darkmatter'
                        });
                        event.shaped('kubejs:6_darkmatter', [
                            'AAA',
                            'AAA',
                            'AAA'
                            ], {
                                A: 'kubejs:5_darkmatter'
                            });
                            event.shaped('kubejs:7_darkmatter', [
                                'AAA',
                                'AAA',
                                'AAA'
                                ], {
                                    A: 'kubejs:6_darkmatter'
                                });
                                event.shaped('kubejs:8_darkmatter', [
                                    'AAA',
                                    'AAA',
                                    'AAA'
                                    ], {
                                        A: 'kubejs:7_darkmatter'
                                    });
                                    event.shaped('kubejs:9_darkmatter', [
                                        'AAA',
                                        'AAA',
                                        'AAA'
                                        ], {
                                            A: 'kubejs:8_darkmatter'
                                        });


	event.shaped('kubejs:1_hay_bale', [
        'AAA',
        'AAA',
        'AAA'
        ], {
            A: 'minecraft:hay_block'
        });

        event.shaped('kubejs:2_hay_bale', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:1_hay_bale'
            });
            event.shaped('kubejs:3_hay_bale', [
                'AAA',
                'AAA',
                'AAA'
                ], {
                    A: 'kubejs:2_hay_bale'
                });

                event.shaped('kubejs:4_hay_bale', [
                    'AAA',
                    'AAA',
                    'AAA'
                    ], {
                        A: 'kubejs:3_hay_bale'
                    });

                    event.shaped('kubejs:5_hay_bale', [
                        'AAA',
                        'AAA',
                        'AAA'
                        ], {
                            A: 'kubejs:4_hay_bale'
                        });
    
        event.shaped('kubejs:6_hay_bale', [
            'AAA',
            'AAA',
            'AAA'
            ], {
                A: 'kubejs:5_hay_bale'
        })});