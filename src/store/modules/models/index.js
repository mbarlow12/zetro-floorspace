import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    stories: [],
        // lib
    library: {
      building_units: [],
      thermal_zones: [],
      space_types: [],
      building_types: [
        {
          id: 'SecondarySchool',
          name: 'Secondary School',
        },
        {
          id: 'PrimarySchool',
          name: 'Primary School',
        },
        {
          id: 'SmallOffice',
          name: 'Small Office',
        },
        {
          id: 'MediumOffice',
          name: 'Medium Office',
        },
        {
          id: 'LargeOffice',
          name: 'Large Office',
        },
        {
          id: 'SmallHotel',
          name: 'Small Hotel',
        },
        {
          id: 'LargeHotel',
          name: 'Large Hotel',
        },
        {
          id: 'Warehouse',
          name: 'Warehouse',
        },
        {
          id: 'RetailStandalone',
          name: 'Retail Standalone',
        },
        {
          id: 'RetailStripmall',
          name: 'Retail Stripmall',
        },
        {
          id: 'QuickServiceRestaurant',
          name: 'Quick Service Restaurant',
        },
        {
          id: 'FullServiceRestaurant',
          name: 'Full Service Restaurant',
        },
        {
          id: 'MidriseApartment',
          name: 'Midrise Apartment',
        },
        {
          id: 'HighriseApartment',
          name: 'Highrise Apartment',
        },
        {
          id: 'Hospital',
          name: 'Hospital',
        },
        {
          id: 'Outpatient',
          name: 'Outpatient',
        },
        {
          id: 'SuperMarket',
          name: 'Super Market',
        },
        {
          id: 'Laboratory',
          name: 'Laboratory',
        },
        {
          id: 'LargeDataCenterLowITE',
          name: 'Large Data Center Low ITE',
        },
        {
          id: 'LargeDataCenterHighITE',
          name: 'Large Data Center High ITE',
        },
        {
          id: 'SmallDataCenterLowITE',
          name: 'Small Data Center Low ITE',
        },
        {
          id: 'SmallDataCenterHighITE',
          name: 'Small Data Center High ITE',
        },
      ],
      construction_sets: [],
      window_definitions: [],
      daylighting_control_definitions: [],
      pitched_roofs: [],
      door_definitions: [],
    },
  },
  actions,
  mutations,
  getters,
};
