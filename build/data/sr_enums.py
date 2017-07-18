# TODO
# Move these definitions into a database
# (preface table names with 'enum' or list enum table names elsewhere?)

faction_key = 'faction'
card_type_key = 'card type'
group_position_key = 'group position'
card_attribute_key = 'card attribute'

js_categories = [
    faction_key,
    card_type_key,
    group_position_key,
    card_attribute_key
]

ordered_categories = [
    faction_key,
    card_type_key
]

sass_categories = [
    faction_key,
    card_type_key,
    group_position_key
]

project_enums = {
    faction_key: [
        'unaligned',
        'Blob',
        'Star Empire',
        'Machine Cult',
        'Trade Federation'
    ],
    card_type_key: [
        'Ship',
        'Base',
        'Outpost'
    ],
    group_position_key: [
        'only',
        'inner',
        'first',
        'last'
    ],
    card_attribute_key: [
        'faction',
        'card type',
        'name',
        'cost'
    ]
}

js_enums = {key: project_enums[key] for key in js_categories}
sass_enums = {key: project_enums[key] for key in sass_categories}
