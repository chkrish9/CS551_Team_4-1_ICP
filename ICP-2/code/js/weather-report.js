var app = angular.module('WeatherReport', []);

app.controller('report', function ($scope, $http) {
    /*Variables declaration*/
    var result = [];
    $scope.statecode = "0";
    $scope.cityname = "0";
    $scope.cities = [];
    $scope.errorMsg = false;
    
    /*Assigning states and cities to statecity variable*/
    $scope.statecity = [
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Alabaster"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Albertville"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Alexander City"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Andalusia"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Anniston"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Arab"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Athens"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Atmore"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Attalla"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Auburn"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Bay Minette"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Bessemer"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Birmingham"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Boaz"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Center Point"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Chickasaw"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Clanton"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Cullman"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Daphne"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Decatur"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Demopolis"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Dothan"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Enterprise"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Eufaula"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Fairfield"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Fairhope"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Florence"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Foley"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Forestdale"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Fort Payne"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Fort Rucker"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Fultondale"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Gadsden"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Gardendale"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Greenville"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Guntersville"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Hamilton"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Hartselle"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Helena"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Homewood"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Hoover"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Hueytown"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Huntsville"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Irondale"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Jacksonville"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Jasper"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Lanett"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Leeds"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Madison"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Millbrook"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Mobile"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Monroeville"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Montgomery"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Moody"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Mountain Brook"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Muscle Shoals"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Northport"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Opelika"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Opp"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Oxford"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Ozark"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Pelham"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Pell City"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Phenix City"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Pleasant Grove"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Prattville"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Prichard"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Rainbow City"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Roanoke"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Russellville"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Saks"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Saraland"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Scottsboro"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Selma"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Sheffield"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Smiths"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Southside"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Sylacauga"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Talladega"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Tarrant"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Theodore"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Tillmans Corner"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Troy"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Trussville"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Tuscaloosa"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Tuscumbia"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Tuskegee"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Valley"
        },
        {
            "state": "Alabama",
            "sc": "AL",
            "city": "Vestavia Hills"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Affton"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Arnold"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Aurora"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Ballwin"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Barnhart"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Bellefontaine Neighbors"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Belton"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Berkeley"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Black Jack"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Blue Springs"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Bolivar"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Boonville"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Branson"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Brentwood"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Bridgeton"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Cameron"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Cape Girardeau"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Carthage"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Caruthersville"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Chesterfield"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Chillicothe"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Clayton"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Clinton"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Columbia"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Concord"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Crestwood"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Creve Coeur"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "De Soto"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Des Peres"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Dexter"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Ellisville"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Eureka"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Excelsior Springs"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Farmington"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Ferguson"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Festus"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Florissant"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Fort Leonard Wood"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Fulton"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Gladstone"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Grandview"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Hannibal"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Harrisonville"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Hazelwood"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Independence"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Jackson"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Jefferson City"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Jennings"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Joplin"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Kansas City"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Kennett"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Kirksville"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Kirkwood"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Ladue"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Lake St. Louis"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Lebanon"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Lee’s Summit"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Lemay"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Liberty"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Manchester"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Maplewood"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Marshall"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Maryland Heights"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Maryville"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Mehlville"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Mexico"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Moberly"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Monett"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Murphy"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Neosho"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Nevada"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Nixa"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "O’Fallon"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Oakville"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Olivette"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Overland"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Ozark"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Park Hills"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Perryville"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Poplar Bluff"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Raymore"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Raytown"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Republic"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Richmond"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Richmond Heights"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Rolla"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Sappington"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Sedalia"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Shrewsbury"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Sikeston"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Spanish Lake"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Springfield"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "St. Ann"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "St. Charles"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "St. John"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "St. Joseph"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "St. Louis"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "St. Peters"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Sullivan"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Sunset Hills"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Town and Country"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Trenton"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Troy"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Union"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "University City"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Valley Park"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Warrensburg"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Washington"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Webb City"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Webster Groves"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Wentzville"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "West Plains"
        },
        {
            "state": "Missouri",
            "sc": "MO",
            "city": "Wildwood"
        },
        {
            "state": "Alaska",
            "sc": "AK",
            "city": "Anchorage"
        },
        {
            "state": "Alaska",
            "sc": "AK",
            "city": "College"
        },
        {
            "state": "Alaska",
            "sc": "AK",
            "city": "Fairbanks"
        },
        {
            "state": "Alaska",
            "sc": "AK",
            "city": "Juneau and"
        },
        {
            "state": "Alaska",
            "sc": "AK",
            "city": "Kenai"
        },
        {
            "state": "Alaska",
            "sc": "AK",
            "city": "Ketchikan"
        },
        {
            "state": "Alaska",
            "sc": "AK",
            "city": "Knik-Fairview"
        },
        {
            "state": "Alaska",
            "sc": "AK",
            "city": "Kodiak"
        },
        {
            "state": "Alaska",
            "sc": "AK",
            "city": "Lakes"
        },
        {
            "state": "Alaska",
            "sc": "AK",
            "city": "Sitka and"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Anaconda-Deer Lodge County"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Billings"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Bozeman"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Butte-Silver Bow"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Evergreen"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Great Falls"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Havre"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Helena"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Helena Valley Southeast"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Helena Valley West Central"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Kalispell"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Laurel"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Livingston"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Miles City"
        },
        {
            "state": "Montana",
            "sc": "MT",
            "city": "Missoula"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Apache Junction"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Avondale"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Bisbee"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Buckeye"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Bullhead City"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Camp Verde"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Casa Grande"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Casas Adobes"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Catalina"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Catalina Foothills"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Chandler"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Chino Valley"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Coolidge"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Cottonwood"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Cottonwood-Verde Village"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Dewey-Humboldt"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Douglas"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Drexel Heights"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "El Mirage"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Eloy"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Flagstaff"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Florence"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Flowing Wells"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Fortuna Foothills"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Fountain Hills"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Gilbert"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Glendale"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Globe"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Gold Camp"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Goodyear"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Green Valley"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Kingman"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Lake Havasu City"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Marana"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Mesa"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Mohave Valley"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "New Kingman-Butler"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "New River"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Nogales"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Oro Valley"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Page"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Paradise Valley"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Payson"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Peoria"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Phoenix"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Picture Rocks"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Prescott"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Prescott Valley"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Safford"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "San Luis"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Scottsdale"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Sedona"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Show Low"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Sierra Vista"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Sierra Vista Southeast"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Somerton"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Sun City"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Sun City West"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Sun Lakes"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Surprise"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Tanque Verde"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Tempe"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Tuba City"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Tucson"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Tucson Estates"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Winslow"
        },
        {
            "state": "Arizona",
            "sc": "AZ",
            "city": "Yuma"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Alliance"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Beatrice"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Bellevue"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Blair"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Chalco"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Columbus"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Crete"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Elkhorn"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Fremont"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Gering"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Grand Island"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Hastings"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Kearney"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "La Vista"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Lexington"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Lincoln"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "McCook"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Nebraska City"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Norfolk"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "North Platte"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Offutt AFB"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Omaha"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Papillion"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Plattsmouth"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Ralston"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Scottsbluff"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Seward"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "Sidney"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "South Sioux City"
        },
        {
            "state": "Nebraska",
            "sc": "NE",
            "city": "York"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Arkadelphia"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Batesville"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Bella Vista"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Benton"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Bentonville"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Blytheville"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Bryant"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Cabot"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Camden"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Clarksville"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Conway"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Crossett"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "El Dorado"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Fayetteville"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Forrest City"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Fort Smith"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Greenwood"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Harrison"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Heber Springs"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Helena"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Hope"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Hot Springs"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Hot Springs Village"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Jacksonville"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Jonesboro"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Little Rock"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Magnolia"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Malvern"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Marion"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Maumelle"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Monticello"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Morrilton"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Mountain Home"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Newport"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "North Little Rock"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Osceola"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Paragould"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Pine Bluff"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Pocahontas"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Rogers"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Russellville"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Searcy"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Sherwood"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Siloam Springs"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Springdale"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Stuttgart"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Texarkana"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Trumann"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Van Buren"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Warren"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "West Helena"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "West Memphis"
        },
        {
            "state": "Arkansas",
            "sc": "AR",
            "city": "Wynne"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Boulder City"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Carson City"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Elko"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Enterprise"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Fallon"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Fernley"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Gardnerville Ranchos"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Henderson"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Incline Village-Crystal Bay"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Las Vegas"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Laughlin"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Lemmon Valley-Golden Valley"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Mesquite"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Nellis AFB"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "North Las Vegas"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Pahrump"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Paradise"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Reno"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Spanish Springs"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Sparks"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Spring Creek"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Spring Valley"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Sun Valley"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Sunrise Manor"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Whitney"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Winchester"
        },
        {
            "state": "Nevada",
            "sc": "NV",
            "city": "Winnemucca"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Adelanto"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Agoura Hills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Alameda"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Alamo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Albany"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Alhambra"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Aliso Viejo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Alondra Park"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Alpine"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Alta Sierra"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Altadena"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Alum Rock"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "American Canyon"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Anaheim"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Anderson"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Antioch"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Apple Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Aptos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Arcadia"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Arcata"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Arden-Arcade"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Arroyo Grande"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Artesia"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Arvin"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Ashland"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Atascadero"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Atherton"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Atwater"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Auburn"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "August"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Avenal"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Avocado Heights"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Azusa"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Bakersfield"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Baldwin Park"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Banning"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Barstow"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Bay Point"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Baywood-Los Osos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Beaumont"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Bell"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Bell Gardens"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Bellflower"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Belmont"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Benicia"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Berkeley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Bermuda Dunes"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Beverly Hills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Blackhawk-Camino Tassajara"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Bloomington"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Blythe"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Bonadelle Ranchos-Madera Ranchos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Bonita"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Bostonia"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Boyes Hot Springs"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Brawley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Brea"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Brentwood"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Buena Park"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Burbank"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Burlingame"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Calabasas"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Calexico"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "California City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Calimesa"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Calipatria"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Camarillo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Cambria"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Cameron Park"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Camp Pendleton North"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Camp Pendleton South"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Campbell"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Canyon Lake"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Capitola"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Carlsbad"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Carmichael"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Carpinteria"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Carson"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Casa de Oro-Mount Helix"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Castro Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Castroville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Cathedral City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Ceres"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Cerritos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Charter Oak"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Cherryland"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Chico"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Chino"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Chino Hills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Chowchilla"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Chula Vista"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Citrus"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Citrus Heights"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Claremont"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Clayton"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Clearlake"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Cloverdale"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Clovis"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Coachella"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Coalinga"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Colton"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Commerce"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Compton"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Concord"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Corcoran"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Corning"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Corona"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Coronado"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Corte Madera"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Costa Mesa"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Cotati"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Coto de Caza"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Country Club"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Covina"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Crestline"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Cudahy"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Culver City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Cupertino"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Cypress"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Daly City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Dana Point"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Danville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Davis"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Del Aire"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Delano"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Delhi"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Desert Hot Springs"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Diamond Bar"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Dinuba"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Discovery Bay"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Dixon"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Downey"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Duarte"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Dublin"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Earlimart"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "East Compton"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "East Foothills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "East Hemet"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "East La Mirada"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "East Los Angeles"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "East Palo Alto"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "East Pasadena"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "East Porterville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "East San Gabriel"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "El Cajon"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "El Centro"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "El Cerrito"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "El Dorado Hills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "El Monte"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "El Paso de Robles"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "El Rio"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "El Segundo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "El Sobrante"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Elk Grove"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Emeryville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Encinitas"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Escondido"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Eureka"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Exeter"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fair Oaks"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fairfax"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fairfield"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fairview"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fallbrook"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Farmersville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fillmore"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Florence-Graham"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Florin"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Folsom"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fontana"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Foothill Farms"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Foothill Ranch"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fort Bragg"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fortuna"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Foster City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fountain Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fremont"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fresno"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Fullerton"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Galt"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Garden Acres"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Garden Grove"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Gardena"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Gilroy"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Glen Avon"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Glendale"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Glendora"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Gold River"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Golden Hills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Goleta"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Gonzales"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Grand Terrace"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Granite Bay"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Grass Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Greenfield"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Grover Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hacienda Heights"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Half Moon Bay"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hanford"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hawaiian Gardens"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hawthorne"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hayward"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Healdsburg"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hemet"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hercules"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hermosa Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hesperia"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Highland"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hillsborough"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Hollister"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Home Gardens"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Huntington Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Huntington Park"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Huron"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Imperial"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Imperial Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Indio"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Inglewood"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Interlaken"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Ione"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Irvine"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Isla Vista"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Kentfield"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Kerman"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "King City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Kingsburg"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Canada Flintridge"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Crescenta-Montrose"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Habra"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Mesa"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Mirada"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Palma"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Presa"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Puente"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Quinta"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Riviera"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "La Verne"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Ladera Heights"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lafayette"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Laguna"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Laguna Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Laguna Hills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Laguna Niguel"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Laguna West-Lakeside"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Laguna Woods"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lake Arrowhead"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lake Elsinore"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lake Forest"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lake Los Angeles"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lakeside"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lakewood"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lamont"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lancaster"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Larkfield-Wikiup"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Larkspur"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lathrop"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lawndale"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lemon Grove"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lemoore"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lennox"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lincoln"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Linda"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lindsay"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Live Oak"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Live Oak"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Livermore"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Livingston"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lodi"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Loma Linda"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lomita"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lompoc"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Long Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Loomis"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Los Alamitos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Los Altos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Los Altos Hills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Los Angeles"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Los Banos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Los Gatos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lucas Valley-Marinwood"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Lynwood"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Madera"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Madera Acres"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Magalia"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Malibu"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Mammoth Lakes"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Manhattan Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Manteca"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Marina"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Marina del Rey"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Martinez"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Marysville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Maywood"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "McFarland"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "McKinleyville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Mendota"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Menlo Park"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Mentone"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Merced"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Mill Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Millbrae"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Milpitas"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Mira Loma"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Mira Monte"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Mission Viejo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Modesto"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Monrovia"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Montclair"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Montebello"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Montecito"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Monterey"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Monterey Park"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Moorpark"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Moraga"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Moreno Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Morgan Hill"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Morro Bay"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Mountain View"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Murrieta"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Muscoy"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Napa"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "National City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Newark"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Newman"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Newport Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Nipomo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Norco"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "North Auburn"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "North Fair Oaks"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "North Highlands"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Norwalk"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Novato"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Oakdale"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Oakland"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Oakley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Oceano"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Oceanside"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Oildale"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Ojai"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Olivehurst"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Ontario"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Opal Cliffs"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Orange"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Orange Cove"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Orangevale"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Orcutt"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Orinda"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Orland"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Orosi"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Oroville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Oroville East"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Oxnard"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pacific Grove"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pacifica"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Palm Desert"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Palm Springs"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Palmdale"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Palo Alto"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Palos Verdes Estates"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Paradise"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Paramount"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Parkway-South Sacramento"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Parlier"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pasadena"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Patterson"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pedley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Perris"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Petaluma"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pico Rivera"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Piedmont"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pinole"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pismo Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pittsburg"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Placentia"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Placerville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pleasant Hill"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pleasanton"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Pomona"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Port Hueneme"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Porterville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Portola Hills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Poway"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Prunedale"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Quartz Hill"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Ramona"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rancho Cordova"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rancho Cucamonga"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rancho Mirage"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rancho Palos Verdes"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rancho San Diego"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rancho Santa Margarita"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Red Bluff"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Redding"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Redlands"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Redondo Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Redwood City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Reedley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rialto"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Richmond"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Ridgecrest"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rio del Mar"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rio Linda"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Ripon"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Riverbank"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Riverside"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rocklin"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rodeo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rohnert Park"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rolling Hills Estates"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rosamond"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rosedale"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Roseland"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rosemead"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rosemont"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Roseville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rossmoor"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rowland Heights"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Rubidoux"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Sacramento"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Salida"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Salinas"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Anselmo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Bernardino"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Bruno"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Buenaventura"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Carlos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Clemente"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Diego"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Diego Country Estates"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Dimas"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Fernando"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Francisco"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Gabriel"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Jacinto"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Jose"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Juan Capistrano"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Leandro"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Lorenzo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Luis Obispo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Marcos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Marino"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Mateo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Pablo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Rafael"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "San Ramon"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Sanger"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santa Ana"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santa Barbara"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santa Clara"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santa Clarita"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santa Cruz"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santa Fe Springs"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santa Maria"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santa Monica"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santa Paula"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santa Rosa"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Santee"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Saratoga"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Sausalito"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Scotts Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Seal Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Seaside"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Sebastopol"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Selma"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Shafter"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Shasta Lake"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Sierra Madre"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Signal Hill"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Simi Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Solana Beach"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Soledad"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Sonoma"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "South El Monte"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "South Gate"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "South Lake Tahoe"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "South Oroville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "South Pasadena"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "South San Francisco"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "South San Gabriel"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "South San Jose Hills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "South Whittier"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "South Yuba City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Spring Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Stanford"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Stanton"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Stockton"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Suisun City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Sun City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Sunnyvale"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Susanville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Taft"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Tamalpais-Homestead Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Tehachapi"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Temecula"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Temple City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Thermalito"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Thousand Oaks"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Tiburon"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Torrance"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Tracy"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Truckee"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Tulare"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Turlock"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Tustin"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Tustin Foothills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Twentynine Palms"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Twentynine Palms Base"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Ukiah"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Union City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Upland"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Vacaville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Valinda"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Valle Vista"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Vallejo"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Valley Center"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Vandenberg AFB"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Victorville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "View Park-Windsor Hills"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Vincent"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Vineyard"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Visalia"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Vista"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Walnut"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Walnut Creek"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Walnut Park"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Wasco"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Waterford"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Watsonville"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "West Athens"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "West Carson"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "West Covina"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "West Hollywood"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "West Modesto"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "West Puente Valley"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "West Sacramento"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "West Whittier-Los Nietos"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Westlake Village"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Westminster"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Westmont"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Whittier"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Wildomar"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Willowbrook"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Willows"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Windsor"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Winter Gardens"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Winters"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Winton"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Woodcrest"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Woodlake"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Woodland"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Yorba Linda"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Yreka"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Yuba City"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Yucaipa"
        },
        {
            "state": "California",
            "sc": "CA",
            "city": "Yucca Valley"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Amherst"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Atkinson"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Barrington"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Bedford"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Belmont"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Berlin"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Bow"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Claremont"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Concord"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Conway"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Derry"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Derry"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Dover"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Durham"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Durham"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Exeter"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Exeter"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Franklin"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Gilford"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Goffstown"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Hampstead"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Hampton"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Hampton"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Hanover"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Hanover"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Hollis"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Hooksett"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Hudson"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Hudson"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Keene"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Laconia"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Lebanon"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Litchfield"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Londonderry"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Londonderry"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Manchester"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Merrimack"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Milford"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Milford"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Nashua"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Newmarket"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Newport"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Pelham"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Pembroke"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Plaistow"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Portsmouth"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Raymond"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Rochester"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Salem"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Seabrook"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Somersworth"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Stratham"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Swanzey"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Weare"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Windham"
        },
        {
            "state": "New Hampshire",
            "sc": "NH",
            "city": "Wolfeboro"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Air Force Academy"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Alamosa"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Applewood"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Arvada"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Aurora"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Berkley"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Black Forest"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Boulder"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Brighton"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Broomfield"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Canon City"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Castle Rock"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Castlewood"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Cimarron Hills"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Clifton"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Colorado Springs"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Columbine"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Commerce City"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Cortez"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Craig"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Delta"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Denver"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Derby"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Durango"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Edwards"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Englewood"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Erie"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Evans"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Evergreen"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Federal Heights"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Fort Carson"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Fort Collins"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Fort Lupton"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Fort Morgan"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Fountain"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Fruita"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Fruitvale"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Glenwood Springs"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Golden"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Grand Junction"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Greeley"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Greenwood Village"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Gunbarrel"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Highlands Ranch"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Ken Caryl"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "La Junta"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Lafayette"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Lakewood"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Lamar"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Littleton"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Longmont"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Louisville"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Loveland"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Montrose"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Northglenn"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Orchard Mesa"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Parker"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Pueblo"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Pueblo West"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Redlands"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Rifle"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Security-Widefield"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Sherrelwood"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Southglenn"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Steamboat Springs"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Sterling"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Stonegate"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Stratmoor"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Superior"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "The Pinery"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Thornton"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Trinidad"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Twin Lakes"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Welby"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Westminster"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Wheat Ridge"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Windsor"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Woodland Park"
        },
        {
            "state": "Colorado",
            "sc": "CO",
            "city": "Woodmoor"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Absecon"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Allendale"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Asbury Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ashland"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Atlantic City"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Audubon"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Avenel"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Barclay-Kingston"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Barrington"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Bayonne"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Beachwood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Belleville"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Bellmawr"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Belmar"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Bergenfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Berkeley Heights"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Berlin"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Bernardsville"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Bloomfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Bloomingdale"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Bogota"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Boonton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Bound Brook"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Bridgeton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Brigantine"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Browns Mills"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Budd Lake"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Burlington"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Butler"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Caldwell"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Camden"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Carneys Point"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Carteret"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Cedar Grove"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Chatham"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Cherry Hill Mall"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Clark"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Clayton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Cliffside Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Clifton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Closter"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Collingswood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Colonia"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Cranford"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Cresskill"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Crestwood Village"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Dayton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Dover"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Dumont"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Dunellen"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "East Brunswick"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "East Orange"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "East Rutherford"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Eatontown"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Echelon"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Edgewater"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Edison"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Elizabeth"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Elmwood Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Emerson"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Englewood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Erlton-Ellisburg"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ewing"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Fair Lawn"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Fairfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Fairview"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Fanwood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Florence-Roebling"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Florham Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Fords"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Fort Dix"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Fort Lee"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Franklin Lakes"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Freehold"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Garfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Glassboro"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Glen Ridge"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Glen Rock"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Gloucester City"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Greentree"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Guttenberg"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Hackensack"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Hackettstown"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Haddon Heights"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Haddonfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Haledon"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Hammonton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Harrison"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Hasbrouck Heights"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Hawthorne"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Highland Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Hillsdale"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Hillside"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Hoboken"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Holiday City-Berkeley"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Hopatcong"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Irvington"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Iselin"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Jamesburg"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Jersey City"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Keansburg"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Kearny"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Kendall Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Kenilworth"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Keyport"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Kinnelon"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Lake Mohawk"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Lakewood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Laurence Harbor"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Leisure Village West-Pine Lake Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Leonia"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Lincoln Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Lincroft"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Linden"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Lindenwold"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Linwood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Little Falls"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Little Ferry"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Little Silver"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Livingston"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Lodi"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Long Branch"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Lyndhurst"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Madison"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Madison Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Manasquan"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Manville"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Maplewood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Margate City"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Marlton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Matawan"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Maywood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "McGuire AFB"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Mercerville-Hamilton Square"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Metuchen"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Middlesex"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Midland Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Millburn"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Milltown"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Millville"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Montclair"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Montvale"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Moorestown-Lenola"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Morganville"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Morristown"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Mountainside"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Mystic Island"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "New Brunswick"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "New Milford"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "New Providence"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Newark"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Newton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "North Arlington"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "North Brunswick Township"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "North Caldwell"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "North Haledon"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "North Plainfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Northfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Nutley"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Oakland"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ocean Acres"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ocean City"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Old Bridge"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Oradell"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Orange"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Palisades Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Palmyra"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Paramus"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Park Ridge"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Passaic"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Paterson"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Paulsboro"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Pennsauken"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Pennsville"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Perth Amboy"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Phillipsburg"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Pine Hill"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Pitman"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Plainfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Pleasantville"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Point Pleasant"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Pompton Lakes"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Princeton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Princeton Meadows"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Rahway"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ramblewood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ramsey"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Raritan"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Red Bank"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ridgefield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ridgefield Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ridgewood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ringwood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "River Edge"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "River Vale"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Rockaway"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Roselle"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Roselle Park"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Rumson"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Runnemede"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Rutherford"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Saddle Brook"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Sayreville"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Scotch Plains"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Secaucus"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Somers Point"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Somerset"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Somerville"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "South Amboy"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "South Orange"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "South Plainfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "South River"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Spotswood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Springdale"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Springfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Stratford"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Strathmore"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Succasunna-Kenvil"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Summit"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Teaneck"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Tenafly"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Tinton Falls"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Toms River"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Totowa"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Trenton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Twin Rivers"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Union"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Union Beach"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Union City"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Upper Saddle River"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Ventnor City"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Verona"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Villas"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Vineland"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Waldwick"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Wallington"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Wanaque"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Washington"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Washington Township"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Wayne"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "West Caldwell"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "West Freehold"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "West Long Branch"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "West Milford"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "West New York"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "West Orange"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "West Paterson"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Westfield"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Westwood"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Wharton"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "White Horse"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "White Meadow Lake"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Williamstown"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Wood-Ridge"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Woodbridge"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Woodbury"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Wyckoff"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Yardville-Groveville"
        },
        {
            "state": "New Jersey",
            "sc": "NJ",
            "city": "Yorketown"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Ansonia"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Ansonia"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Avon"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Berlin"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Bethel"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Bethel"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Bloomfield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Branford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Bridgeport"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Bridgeport"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Bristol"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Bristol"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Brookfield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Brooklyn"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Burlington"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Canton"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Central Manchester"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Cheshire"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Clinton"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Colchester"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Conning Towers-Nautilus Park"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Coventry"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Cromwell"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Danbury"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Danbury"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Darien"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Darien"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Derby"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Derby"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Durham"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "East Haddam"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "East Hampton"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "East Hartford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "East Hartford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "East Haven"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "East Haven"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "East Lyme"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "East Windsor"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Easton"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Ellington"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Enfield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Essex"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Fairfield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Farmington"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Glastonbury"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Glastonbury Center"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Granby"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Greenwich"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Griswold"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Groton"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Groton"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Guilford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Haddam"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Hamden"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Hartford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Hartford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Hebron"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Kensington"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Killingly"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Killingworth"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Lebanon"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Ledyard"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Litchfield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Madison"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Manchester"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Mansfield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Meriden"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Meriden"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Middlebury"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Middletown"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Middletown"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Milford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Milford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Monroe"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Montville"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Naugatuck"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Naugatuck"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New Britain"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New Britain"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New Canaan"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New Fairfield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New Hartford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New Haven"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New Haven"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New London"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New London"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New Milford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "New Milford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Newington"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Newington"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Newtown"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "North Branford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "North Haven"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "North Haven"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Norwalk"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Norwalk"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Norwich"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Norwich"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Oakville"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Old Lyme"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Old Saybrook"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Orange"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Orange"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Oxford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Plainfield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Plainville"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Plymouth"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Portland"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Prospect"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Putnam"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Putnam District"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Redding"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Ridgefield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Ridgefield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Rockville"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Rocky Hill"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Seymour"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Shelton"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Shelton"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Simsbury"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Somers"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "South Windsor"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Southbury"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Southington"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Southwood Acres"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Stafford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Stamford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Stamford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Stonington"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Storrs"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Stratford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Stratford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Suffield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Thomaston"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Thompson"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Thompsonville"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Tolland"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Torrington"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Torrington"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Trumbull"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Trumbull"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Vernon"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Wallingford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Wallingford Center"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Waterbury"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Waterbury"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Waterford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Watertown"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "West Hartford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "West Hartford"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "West Haven"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "West Haven"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Westbrook"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Weston"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Westport"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Westport"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Wethersfield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Wethersfield"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Willimantic"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Wilton"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Winchester"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Windham"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Windsor"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Windsor Locks"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Windsor Locks"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Winsted"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Wolcott"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Woodbridge"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Woodbury"
        },
        {
            "state": "Connecticut",
            "sc": "CT",
            "city": "Woodstock"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Alamogordo"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Albuquerque"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Anthony"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Artesia"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Aztec"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Belen"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Bernalillo"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Bloomfield"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Carlsbad"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Chaparral"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Clovis"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Corrales"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Deming"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Espanola"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Farmington"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Gallup"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Grants"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Hobbs"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Kirtland"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Las Cruces"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Las Vegas"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Los Alamos"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Los Lunas"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Lovington"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "North Valley"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Portales"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Raton"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Rio Rancho"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Roswell"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Ruidoso"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Santa Fe"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Shiprock"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Silver City"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Socorro"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "South Valley"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Sunland Park"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Truth or Consequences"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "White Rock"
        },
        {
            "state": "New Mexico",
            "sc": "NM",
            "city": "Zuni Pueblo"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Bear"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Brookside"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Claymont"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Dover"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Glasgow"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Hockessin"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Middletown"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Milford"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Newark"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "North Star"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Pike Creek"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Seaford"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Wilmington"
        },
        {
            "state": "Delaware",
            "sc": "DE",
            "city": "Wilmington Manor"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Airmont"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Albany"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Albion"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Albion"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Alden"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Allegany"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Altamont"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Amherst"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Amityville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Amsterdam"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Arcadia"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Arlington"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Attica"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Auburn"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Aurora"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Avon"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Babylon"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Babylon"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Baldwin"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Baldwin Harbor"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Baldwinsville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ballston"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Barton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Batavia"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Bath"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Bay Shore"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Bayport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Bayville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Baywood"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Beacon"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Bedford"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Beekman"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Bellmore"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Bethlehem"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Bethpage"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Big Flats"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Binghamton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Blooming Grove"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Bohemia"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Boston"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Brentwood"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Briarcliff Manor"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Brighton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Brighton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Brockport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Bronxville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Brookhaven"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Brunswick"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Buffalo"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Busti"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cairo"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Camillus"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Canandaigua"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Canandaigua"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Canton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Carmel"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Catskill"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cazenovia"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cedarhurst"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Center Moriches"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Centereach"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Central Islip"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Chappaqua"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cheektowaga"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cheektowaga"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Chenango"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Chester"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Chestnut Ridge"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Chili"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cicero"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Clarence"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Clarkson"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Clarkstown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Claverack"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Clay"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Clifton Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cobleskill"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Coeymans"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cohoes"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Collins"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Colonie"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Colonie"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Commack"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Concord"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Congers"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Copiague"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Coram"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Corning"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Corning"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cornwall"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cortland"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cortlandt"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Cortlandville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Coxsackie"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Crawford"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Croton-on-Hudson"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "De Witt"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Deer Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Deerpark"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Delmar"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Depew"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Dix Hills"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Dobbs Ferry"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Dover"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Dryden"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Dunkirk"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Aurora"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Fishkill"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Glenville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Greenbush"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Hampton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Hills"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Islip"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Massapequa"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Meadow"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Northport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Patchogue"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Rochester"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Rochester"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "East Rockaway"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Eastchester"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Eastchester"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Eden"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Elbridge"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ellicott"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Elma"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Elmira"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Elmira"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Elmont"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Elwood"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Endicott"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Endwell"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Erwin"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Esopus"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Evans"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Fairmount"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Fallsburg"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Farmingdale"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Farmington"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Farmingville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Fenton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Fishkill"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Floral Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Fort Ann"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Fort Drum"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Fort Salonga"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Frankfort"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Franklin Square"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Fredonia"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Freeport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Fulton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Garden City"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Garden City Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Gates"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Gates-North Gates"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Geddes"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Geneseo"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Geneseo"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Geneva"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "German Flatts"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Glen Cove"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Glens Falls"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Glens Falls North"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Glenville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Gloversville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Goshen"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Gouverneur"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Granby"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Grand Island"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Granville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Great Neck"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Great Neck Plaza"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Greece"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Greece"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Greenburgh"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Greenfield"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Greenlawn"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Greenville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Guilderland"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Halfmoon"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hamburg"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hamburg"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hamlin"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hampton Bays"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hanover"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Harrison"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Harrison"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hartsdale"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hastings"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hastings-on-Hudson"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hauppauge"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Haverstraw"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Haverstraw"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hempstead"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hempstead"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Henrietta"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Herkimer"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Herkimer"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hewlett"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hicksville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Highlands"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hillcrest"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Holbrook"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Holtsville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Homer"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hoosick"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hornell"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Horseheads"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Horseheads"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hudson"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hudson Falls"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Huntington"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Huntington"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Huntington Station"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hurley"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Hyde Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ilion"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Inwood"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Irondequoit"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Irondequoit"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Irvington"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Islip"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Islip"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ithaca"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ithaca"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Jamestown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Jefferson Valley-Yorktown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Jericho"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Johnson City"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Johnstown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Johnstown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Kenmore"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Kent"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Kinderhook"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Kings Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Kingsbury"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Kingston"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Kirkland"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Kiryas Joel"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "La Grange"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lackawanna"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lake Carmel"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lake Grove"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lake Ronkonkoma"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lancaster"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lancaster"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lansing"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Larchmont"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lawrence"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Le Ray"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Le Roy"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lee"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lenox"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Levittown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lewisboro"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lewiston"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Liberty"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lindenhurst"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Livonia"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lloyd"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lockport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lockport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Long Beach"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lynbrook"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Lysander"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Macedon"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mahopac"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Malone"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Malone"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Malta"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Malverne"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mamakating"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mamaroneck"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mamaroneck"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Manchester"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Manhasset"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Manlius"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Manorhaven"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Manorville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Marcellus"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Marcy"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Marlborough"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Massapequa"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Massapequa Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Massena"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Massena"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mastic"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mastic Beach"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mattydale"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mayfield"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mechanicstown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Medford"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Medina"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Melville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mendon"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Merrick"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Middle Island"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Middletown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Miller Place"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Milo"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Milton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mineola"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Monroe"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Monroe"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Monsey"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Montgomery"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Monticello"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Moreau"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mount Hope"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mount Ivy"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mount Kisco"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mount Kisco"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mount Pleasant"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mount Sinai"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Mount Vernon"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Murray"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Nanuet"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Nesconset"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New Cassel"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New Castle"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New City"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New Hartford"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New Hyde Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New Paltz"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New Paltz"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New Rochelle"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New Scotland"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New Windsor"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New Windsor"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "New York"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Newark"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Newburgh"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Newburgh"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Newfane"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Newstead"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Niagara"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Niagara Falls"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Niskayuna"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Amityville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Babylon"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Bay Shore"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Bellmore"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Bellport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Castle"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Elba"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Greenbush"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Hempstead"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Lindenhurst"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Massapequa"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Merrick"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North New Hyde Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Patchogue"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Syracuse"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Tonawanda"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Valley Stream"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "North Wantagh"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Northport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Norwich"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Nyack"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Oakdale"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Oceanside"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ogden"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ogdensburg"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Olean"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Oneida"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Oneonta"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Onondaga"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ontario"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Orange Lake"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Orangetown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Orchard Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ossining"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ossining"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Oswego"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Oswego"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Owego"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Oyster Bay"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Oyster Bay"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Palmyra"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Parma"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Patchogue"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Patterson"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Pawling"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Pearl River"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Peekskill"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Pelham"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Pelham"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Pendleton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Penfield"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Perinton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Perry"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Peru"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Phelps"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Philipstown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Pittsford"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Plainedge"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Plainview"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Plattekill"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Plattsburgh"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Plattsburgh"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Pleasant Valley"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Pleasantville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Pomfret"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Pompey"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Port Chester"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Port Jefferson"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Port Jefferson Station"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Port Jervis"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Port Washington"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Porter"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Potsdam"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Potsdam"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Poughkeepsie"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Poughkeepsie"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Putnam Valley"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Queensbury"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ramapo"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Red Hook"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rensselaer"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rhinebeck"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ridge"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ridgeway"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Riverhead"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Riverhead"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rochester"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rochester"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rockville Centre"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rocky Point"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rome"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ronkonkoma"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Roosevelt"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rosendale"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Roslyn Heights"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rotterdam"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rotterdam"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Royalton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rye"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rye"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Rye Brook"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Salamanca"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Salina"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Salisbury"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Sand Lake"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Saratoga Springs"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Saugerties"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Sayville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Scarsdale"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Scarsdale"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Schaghticoke"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Schenectady"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Schodack"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Schroeppel"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Scotchtown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Scotia"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Scriba"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Seaford"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Selden"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Seneca Falls"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Seneca Falls"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Setauket-East Setauket"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Shawangunk"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Shirley"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Sidney"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Skaneateles"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Sleepy Hollow"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Smithtown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Smithtown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Sodus"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Solvay"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Somers"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Sound Beach"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "South Farmingdale"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "South Hill"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "South Huntington"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "South Lockport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Southampton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Southeast"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Southold"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Southport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Southport"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Spring Valley"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "St. James"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Stillwater"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Stony Brook"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Stony Point"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Stony Point"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Suffern"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Sullivan"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Sweden"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Syosset"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Syracuse"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Tappan"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Tarrytown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Terryville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Thompson"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Tonawanda"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Tonawanda"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Tonawanda"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Troy"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Tuckahoe"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Ulster"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Union"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Uniondale"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Utica"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Valley Cottage"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Valley Stream"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Van Buren"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Verona"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Vestal"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Victor"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Volney"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wading River"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Walden"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wallkill"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Walworth"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wantagh"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wappinger"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Warwick"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Warwick"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Waterford"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Waterloo"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Watertown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Watervliet"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wawarsing"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wawayanda"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Webster"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wellsville"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "West Babylon"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "West Glens Falls"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "West Haverstraw"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "West Hempstead"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "West Islip"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "West Point"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "West Seneca"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "West Seneca"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Westbury"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Westmere"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Westmoreland"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wheatfield"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "White Plains"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Whitestown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Williamson"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Williston Park"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wilna"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wilton"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Windsor"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Woodbury"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Woodbury"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Woodmere"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Woodstock"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Wyandanch"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Yonkers"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Yorktown"
        },
        {
            "state": "New York",
            "sc": "NY",
            "city": "Yorktown Heights"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Albemarle"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Apex"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Archdale"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Asheboro"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Asheville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Belmont"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Black Mountain"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Boone"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Brevard"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Burlington"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Carrboro"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Cary"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Chapel Hill"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Charlotte"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Clayton"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Clemmons"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Clinton"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Concord"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Conover"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Cornelius"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Davidson"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Dunn"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Durham"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Eden"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Elizabeth City"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Elon College"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Fayetteville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Forest City"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Fort Bragg"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Fuquay-Varina"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Garner"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Gastonia"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Goldsboro"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Graham"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Greensboro"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Greenville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Half Moon"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Hamlet"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Havelock"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Henderson"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Hendersonville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Hickory"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "High Point"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Holly Springs"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Hope Mills"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Huntersville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Indian Trail"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Jacksonville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Kannapolis"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Kernersville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Kings Grant"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Kings Mountain"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Kinston"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Laurinburg"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Lenoir"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Lewisville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Lexington"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Lincolnton"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Lumberton"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Masonboro"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Matthews"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Mebane"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Mint Hill"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Monroe"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Mooresville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Morehead City"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Morganton"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Mount Airy"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Mount Holly"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Murraysville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Myrtle Grove"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "New Bern"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Newton"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Oak Island"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Oxford"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Pinehurst"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Piney Green"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Raleigh"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Reidsville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Roanoke Rapids"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Rockingham"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Rocky Mount"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Roxboro"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Salisbury"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Sanford"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Shelby"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Siler City"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Smithfield"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Southern Pines"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Spring Lake"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "St. Stephens"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Statesville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Summerfield"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Tarboro"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Thomasville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Trinity"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Wake Forest"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Washington"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Waynesville"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Weddington"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Wilmington"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Wilson"
        },
        {
            "state": "North Carolina",
            "sc": "NC",
            "city": "Winston-Salem"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Alachua"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Altamonte Springs"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Andover"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Apollo Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Apopka"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Arcadia"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Atlantic Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Auburndale"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Aventura"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Avon Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Azalea Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Bartow"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Bayonet Point"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Bayshore Gardens"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Beacon Square"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Bee Ridge"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Bellair-Meadowbrook Terrace"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Belle Glade"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Bellview"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Beverly Hills"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Bloomingdale"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Boca Del Mar"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Boca Raton"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Bonita Springs"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Boynton Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Bradenton"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Brandon"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Brent"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Broadview Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Brooksville"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Brownsville"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Callaway"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Cape Canaveral"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Cape Coral"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Carol City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Casselberry"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Century Village"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Cheval"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Citrus Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Citrus Ridge"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Clearwater"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Clermont"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Clewiston"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Cocoa"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Cocoa Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Coconut Creek"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Collier Manor-Cresthaven"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Conway"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Cooper City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Coral Gables"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Coral Springs"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Coral Terrace"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Country Club"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Country Walk"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Crestview"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Cutler"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Cutler Ridge"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Cypress Gardens"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Cypress Lake"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Dade City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Dania Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Davie"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Daytona Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "De Bary"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "De Land"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Deerfield Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Delray Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Deltona"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Destin"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Doctor Phillips"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Doral"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Dunedin"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "East Lake"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "East Perrine"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Edgewater"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Eglin AFB"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Egypt Lake-Leto"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Elfers"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Englewood"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Ensley"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Estero"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Eustis"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fairview Shores"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fern Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fernandina Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Ferry Pass"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Florida City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Florida Ridge"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Forest City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fort Lauderdale"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fort Myers"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fort Myers Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fort Pierce"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fort Pierce North"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fort Walton Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fountainbleau"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fruit Cove"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Fruitville"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Gainesville"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Gibsonton"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Gifford"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Gladeview"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Glenvar Heights"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Golden Gate"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Golden Glades"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Golden Lakes"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Goldenrod"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Gonzalez"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Goulds"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Greater Carrollwood"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Greater Northdale"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Greater Sun Center"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Greenacres"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Gulf Gate Estates"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Gulfport"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Haines City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Hallandale"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Hamptons at Boca Raton"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Hernando"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Hialeah"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Hialeah Gardens"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Hobe Sound"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Holiday"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Holly Hill"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Hollywood"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Homestead"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Homosassa Springs"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Hudson"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Hunters Creek"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Immokalee"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Indian Harbour Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Inverness"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Inwood"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Iona"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Islamorada"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Ives Estates"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Jacksonville"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Jacksonville Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Jasmine Estates"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Jensen Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Jupiter"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Kendale Lakes"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Kendall"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Kendall West"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Key Biscayne"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Key Largo"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Key West"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Keystone"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Kings Point"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Kissimmee"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lady Lake"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lake Butter"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lake City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lake Lorraine"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lake Lucerne"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lake Magdalene"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lake Mary"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lake Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lake Wales"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lake Worth"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lake Worth Corridor"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lakeland"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lakeland Highlands"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lakes by the Bay"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lakeside"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lakewood Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Land O’ Lakes"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lantana"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Largo"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lauderdale Lakes"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lauderhill"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Laurel"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Leesburg"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lehigh Acres"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Leisure City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lighthouse Point"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Live Oak"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lockhart"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Longboat Key"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Longwood"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lutz"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Lynn Haven"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Maitland"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Mango"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Marathon"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Marco Island"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Margate"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Marianna"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "McGregor"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Meadow Woods"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Medulla"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Melbourne"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Melrose Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Memphis"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Merritt Island"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Miami"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Miami Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Miami Lakes"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Miami Shores"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Miami Springs"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Micco"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Middleburg"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Milton"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Mims"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Miramar"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Mount Dora"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Myrtle Grove"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Naples"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Naples Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Neptune Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "New Port Richey"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "New Port Richey East"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "New Smyrna Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Niceville"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Norland"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "North Andrews Gardens"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "North Bay Village"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "North Fort Myers"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "North Lauderdale"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "North Miami"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "North Miami Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "North Palm Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "North Port"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "North Sarasota"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Oak Ridge"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Oakland Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Ocala"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Ocoee"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Ojus"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Oldsmar"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Olympia Heights"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Opa-locka"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Opa-locka North"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Orange City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Orange Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Orlando"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Orlovista"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Ormond Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Ormond-By-The-Sea"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Oviedo"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pace"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palatka"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palm Bay"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palm Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palm Beach Gardens"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palm City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palm Coast"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palm Harbor"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palm River-Clair Mel"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palm Springs"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palm Valley"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palmetto"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Palmetto Estates"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Panama City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Panama City Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Parkland"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pembroke Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pembroke Pines"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pensacola"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Perry"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pine Castle"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pine Hills"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pinecrest"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pinellas Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pinewood"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Plant City"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Plantation"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Poinciana"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pompano Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Pompano Beach Highlands"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Port Charlotte"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Port Orange"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Port Salerno"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Port St. John"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Port St. Lucie"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Princeton"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Punta Gorda"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Quincy"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Richmond Heights"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Richmond West"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Riverview"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Riviera Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Rockledge"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Rotonda"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Royal Palm Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Ruskin"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Safety Harbor"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "San Carlos Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sandalfoot Cove"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sanford"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sanibel"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sarasota"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sarasota Springs"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Satellite Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Scott Lake"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sebastian"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sebring"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Seminole"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Shady Hills"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Siesta Key"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Silver Springs Shores"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "South Bradenton"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "South Daytona"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "South Highpoint"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "South Miami"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "South Miami Heights"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "South Patrick Shores"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "South Venice"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Southeast Arcadia"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Southgate"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Spring Hill"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Springfield"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "St. Augustine"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "St. Cloud"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "St. Pete Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "St. Petersburg"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Stuart"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sugarmill Woods"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sunny Isles Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sunrise"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sunset"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Sweetwater"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Tallahassee"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Tamarac"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Tamiami"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Tampa"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Tarpon Springs"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Tavares"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Temple Terrace"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "The Crossings"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "The Hammocks"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "The Villages"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Thonotosassa"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Three Lakes"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Titusville"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Town and Country"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Treasure Island"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Union Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "University"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "University Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Upper Grand Lagoon"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Valparaiso"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Valrico"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Venice"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Venice Gardens"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Vero Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Vero Beach South"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Villas"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Warrington"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Wekiwa Springs"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Wellington"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "West and East Lealman"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "West Little River"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "West Melbourne"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "West Palm Beach"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "West Pensacola"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "West Perrine"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "West Vero Corridor"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Westchase"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Westchester"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Westgate-Belvedere Homes"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Weston"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Westview"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Westwood Lakes"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Williamsburg"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Wilton Manors"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Winston"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Winter Garden"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Winter Haven"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Winter Park"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Winter Springs"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Wright"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Yeehaw Junction"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Yulee"
        },
        {
            "state": "Florida",
            "sc": "FL",
            "city": "Zephyrhills"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Bismarck"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Devils Lake"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Dickinson"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Fargo"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Grand Forks"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Jamestown"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Mandan"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Minot"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Minot AFB"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Valley City"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Wahpeton"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "West Fargo"
        },
        {
            "state": "North Dakota",
            "sc": "ND",
            "city": "Williston"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Acworth"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Albany"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Alpharetta"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Americus"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Athens-Clarke County"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Atlanta"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Auburn"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Augusta-Richmond County"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Bainbridge"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Belvedere Park"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Brunswick"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Buford"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Cairo"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Calhoun"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Candler-McAfee"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Canton"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Carrollton"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Cartersville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Cedartown"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Chamblee"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Clarkston"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "College Park"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Columbus"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Conley"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Conyers"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Cordele"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Country Club Estates"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Covington"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Dalton"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Decatur"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Dock Junction"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Doraville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Douglas"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Douglasville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Druid Hills"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Dublin"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Duluth"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Dunwoody"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "East Point"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Eatonton"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Evans"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Fair Oaks"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Fairview"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Fayetteville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Fitzgerald"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Forest Park"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Fort Benning South"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Fort Oglethorpe"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Fort Stewart"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Fort Valley"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Gainesville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Garden City"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Georgetown"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Gresham Park"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Griffin"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Grovetown"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Hapeville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Hinesville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Irondale"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Jesup"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Kennesaw"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Kingsland"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "La Fayette"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "LaGrange"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Lawrenceville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Lilburn"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Mableton"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Macon"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Marietta"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Martinez"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "McDonough"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Milledgeville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Monroe"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Moultrie"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Mountain Park"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Newnan"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Norcross"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "North Atlanta"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "North Decatur"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "North Druid Hills"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Panthersville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Peachtree City"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Perry"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Pooler"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Powder Springs"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Redan"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Richmond Hill"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Riverdale"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Rome"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Roswell"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Sandersville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Sandy Springs"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Savannah"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Scottdale"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Skidaway Island"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Smyrna"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Snellville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "St. Marys"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "St. Simons"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Statesboro"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Stockbridge"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Stone Mountain"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Sugar Hill"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Suwanee"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Swainsboro"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Thomaston"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Thomasville"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Thomson"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Tifton"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Toccoa"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Tucker"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Union City"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Valdosta"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Vidalia"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Vinings"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Warner Robins"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Waycross"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Wilmington Island"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Winder"
        },
        {
            "state": "Georgia",
            "sc": "GA",
            "city": "Woodstock"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Akron"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Alliance"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Amherst"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Ashland"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Ashtabula"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Athens"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Aurora"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Austintown"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Avon"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Avon Lake"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Barberton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bay Village"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Beachwood"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Beavercreek"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Beckett Ridge"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bedford"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bedford Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bellbrook"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bellefontaine"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bellevue"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Belpre"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Berea"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bexley"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Blacklick Estates"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Blue Ash"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Boardman"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bowling Green"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Brecksville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bridgetown North"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Broadview Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Brook Park"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Brooklyn"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Brunswick"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bryan"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Bucyrus"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Cambridge"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Campbell"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Canfield"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Canton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Celina"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Centerville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Cheviot"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Chillicothe"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Cincinnati"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Circleville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Clayton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Cleveland"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Cleveland Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Clyde"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Columbus"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Conneaut"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Cortland"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Coshocton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Covedale"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Cuyahoga Falls"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Dayton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Defiance"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Delaware"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Delphos"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Dent"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Dover"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Dry Run"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Dublin"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "East Cleveland"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "East Liverpool"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Eastlake"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Eaton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Elyria"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Englewood"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Euclid"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Fairborn"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Fairfield"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Fairlawn"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Fairview Park"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Findlay"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Finneytown"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Forest Park"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Forestville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Fostoria"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Franklin"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Fremont"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Gahanna"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Galion"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Garfield Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Geneva"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Girard"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Grandview Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Green"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Greenville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Groesbeck"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Grove City"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Hamilton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Harrison"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Heath"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Highland Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Hilliard"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Hillsboro"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Howland Center"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Hubbard"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Huber Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Hudson"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Huron"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Independence"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Ironton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Jackson"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Kent"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Kenton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Kenwood"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Kettering"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Kirtland"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Lakewood"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Lancaster"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Landen"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Lebanon"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Lima"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Lincoln Village"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Logan"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "London"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Lorain"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Louisville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Loveland"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Lyndhurst"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Macedonia"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Madeira"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Mansfield"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Maple Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Marietta"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Marion"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Martins Ferry"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Marysville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Mason"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Massillon"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Maumee"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Mayfield Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Medina"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Mentor"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Mentor-on-the-Lake"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Miamisburg"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Middleburg Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Middletown"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Milford"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Monroe"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Montgomery"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Moraine"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Mount Healthy"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Mount Vernon"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Napoleon"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "New Philadelphia"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Newark"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Niles"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "North Canton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "North College Hill"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "North Madison"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "North Olmsted"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "North Ridgeville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "North Royalton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Northbrook"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Northgate"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Northridge"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Northridge"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Norton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Norwalk"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Norwood"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Oakwood"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Oberlin"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Olmsted Falls"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Oregon"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Orrville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Oxford"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Painesville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Parma"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Parma Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Pataskala"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Pepper Pike"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Perry Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Perrysburg"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Pickerington"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Piqua"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Port Clinton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Portage Lakes"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Portsmouth"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Powell"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Ravenna"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Reading"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Reynoldsburg"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Richmond Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Rittman"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Riverside"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Rocky River"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Rossford"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Salem"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Sandusky"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Sandusky South"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Seven Hills"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Shaker Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Sharonville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Sheffield Lake"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Shelby"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Shiloh"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Sidney"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Solon"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "South Euclid"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Springboro"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Springdale"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Springfield"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "St. Marys"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Steubenville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Stow"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Streetsboro"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Strongsville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Struthers"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Sylvania"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Tallmadge"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Tiffin"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Tipp City"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Toledo"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Trenton"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Trotwood"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Troy"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Twinsburg"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "University Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Upper Arlington"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Upper Sandusky"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Urbana"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Van Wert"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Vandalia"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Vermilion"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Wadsworth"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Wapakoneta"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Warren"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Warrensville Heights"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Washington"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Wauseon"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Wellston"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "West Carrollton City"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Westerville"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Westlake"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Wheelersburg"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "White Oak"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Whitehall"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Wickliffe"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Willard"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Willoughby"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Willoughby Hills"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Willowick"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Wilmington"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Woodbourne-Hyde Park"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Wooster"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Worthington"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Wright-Patterson AFB"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Wyoming"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Xenia"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Youngstown"
        },
        {
            "state": "Ohio",
            "sc": "OH",
            "city": "Zanesville"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Ahuimanu"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Aiea"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Ewa Beach"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Haiku-Pauwela"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Halawa"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Hawaiian Paradise Park"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Hilo"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Holualoa"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Honolulu"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Kahului"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Kailua"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Kailua"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Kalaoa"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Kaneohe"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Kaneohe Station"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Kapaa"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Kihei"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Lahaina"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Makaha"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Makakilo City"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Makawao"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Mililani Town"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Nanakuli"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Napili-Honokowai"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Pearl City"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Pukalani"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Schofield Barracks"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Village Park"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Wahiawa"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Waianae"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Waihee-Waiehu"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Wailuku"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Waimalu"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Waimea"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Waipahu"
        },
        {
            "state": "Hawaii",
            "sc": "HI",
            "city": "Waipio"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Ada"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Altus"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Anadarko"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Ardmore"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Bartlesville"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Bethany"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Bixby"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Blackwell"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Broken Arrow"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Chickasha"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Choctaw"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Claremore"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Clinton"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Coweta"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Cushing"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Del City"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Duncan"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Durant"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Edmond"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "El Reno"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Elk City"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Enid"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Glenpool"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Guthrie"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Guymon"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Henryetta"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Idabel"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Jenks"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Lawton"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "McAlester"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Miami"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Midwest City"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Moore"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Muskogee"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Mustang"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Norman"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Oklahoma City"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Okmulgee"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Owasso"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Pauls Valley"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Ponca City"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Poteau"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Pryor Creek"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Sallisaw"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Sand Springs"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Sapulpa"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Seminole"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Shawnee"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Stillwater"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Tahlequah"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Tecumseh"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "The Village"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Tulsa"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Vinita"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Wagoner"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Warr Acres"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Weatherford"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Woodward"
        },
        {
            "state": "Oklahoma",
            "sc": "OK",
            "city": "Yukon"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Ammon"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Blackfoot"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Boise City"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Burley"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Caldwell"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Chubbuck"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Coeur d’Alene"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Eagle"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Garden City"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Hailey"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Hayden"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Idaho Falls"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Jerome"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Lewiston"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Meridian"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Moscow"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Mountain Home"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Mountain Home AFB"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Nampa"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Payette"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Pocatello"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Post Falls"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Rexburg"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Sandpoint"
        },
        {
            "state": "Idaho",
            "sc": "ID",
            "city": "Twin Falls"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Albany"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Aloha"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Altamont"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Ashland"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Astoria"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Baker City"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Beaverton"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Bend"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Canby"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Cedar Hills"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Cedar Mill"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Central Point"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "City of The Dalles"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Coos Bay"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Cornelius"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Corvallis"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Cottage Grove"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Dallas"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Eugene"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Fairview"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Florence"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Forest Grove"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Four Corners"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Garden Home-Whitford"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Gladstone"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Grants Pass"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Green"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Gresham"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Hayesville"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Hermiston"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Hillsboro"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Independence"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Jennings Lodge"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Keizer"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Klamath Falls"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "La Grande"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Lake Oswego"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Lebanon"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Lincoln City"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "McMinnville"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Medford"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Milton-Freewater"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Milwaukie"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Monmouth"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Newberg"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Newport"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "North Bend"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Oak Grove"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Oak Hills"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Oatfield"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Ontario"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Oregon City"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Pendleton"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Portland"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Prineville"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Redmond"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Rockcreek"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Roseburg"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Salem"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Sherwood"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Silverton"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Springfield"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "St. Helens"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Stayton"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Sunnyside"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Sutherlin"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Sweet Home"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Tigard"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Troutdale"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Tualatin"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "West Haven-Sylvan"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "West Linn"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "West Slope"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Wilsonville"
        },
        {
            "state": "Oregon",
            "sc": "OR",
            "city": "Woodburn"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Addison"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Algonquin"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Alsip"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Alton"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Antioch"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Arlington Heights"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Aurora"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Barrington"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bartlett"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bartonville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Batavia"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Beach Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Belleville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bellwood"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Belvidere"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bensenville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Benton"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Berwyn"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bethalto"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bloomingdale"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bloomington"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Blue Island"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bolingbrook"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Boulder Hill"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bourbonnais"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bradley"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Bridgeview"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Broadview"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Brookfield"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Buffalo Grove"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Burbank"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Burr Ridge"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Cahokia"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Calumet City"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Calumet Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Canton"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Carbondale"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Carol Stream"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Carpentersville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Cary"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Centralia"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Champaign"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Channahon"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Charleston"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Chatham"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Chicago"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Chicago Heights"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Chicago Ridge"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Cicero"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Clarendon Hills"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Clinton"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Collinsville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Columbia"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Country Club Hills"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Crest Hill"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Crestwood"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Crete"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Crystal Lake"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Danville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Darien"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Decatur"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Deerfield"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "DeKalb"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Des Plaines"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Dixon"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Dolton"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Downers Grove"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Du Quoin"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "East Alton"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "East Moline"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "East Peoria"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "East St. Louis"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Edwardsville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Effingham"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Elgin"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Elk Grove Village"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Elmhurst"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Elmwood Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Evanston"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Evergreen Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Fairview Heights"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Flossmoor"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Forest Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Fox Lake"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Frankfort"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Frankfort Square"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Franklin Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Freeport"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Gages Lake"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Galesburg"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Geneseo"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Geneva"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Glen Carbon"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Glen Ellyn"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Glencoe"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Glendale Heights"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Glenview"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Glenwood"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Godfrey"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Goodings Grove"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Granite City"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Grayslake"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Greenville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Gurnee"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Hanover Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Harrisburg"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Harvard"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Harvey"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Harwood Heights"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Hawthorn Woods"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Hazel Crest"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Herrin"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Hickory Hills"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Highland"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Highland Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Hillside"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Hinsdale"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Hoffman Estates"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Homewood"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Inverness"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Island Lake"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Itasca"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Jacksonville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Jerseyville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Joliet"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Justice"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Kankakee"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Kewanee"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "La Grange"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "La Grange Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "La Salle"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lake Bluff"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lake Forest"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lake in the Hills"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lake Zurich"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lansing"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lemont"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Libertyville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lincoln"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lincolnshire"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lincolnwood"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lindenhurst"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lisle"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Litchfield"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lockport"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lombard"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Long Grove"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Loves Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lynwood"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Lyons"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Machesney Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Macomb"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Manteno"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Marengo"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Marion"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Markham"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Matteson"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Mattoon"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Maywood"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "McHenry"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Melrose Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Mendota"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Metropolis"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Midlothian"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Mokena"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Moline"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Monmouth"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Morris"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Morton"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Morton Grove"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Mount Carmel"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Mount Prospect"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Mount Vernon"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Mundelein"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Murphysboro"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Naperville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "New Lenox"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Niles"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Normal"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Norridge"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "North Aurora"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "North Chicago"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "North Riverside"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Northbrook"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Northlake"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "O’Fallon"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Oak Brook"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Oak Forest"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Oak Lawn"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Oak Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Olney"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Orland Hills"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Orland Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Oswego"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Ottawa"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Palatine"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Palos Heights"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Palos Hills"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Paris"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Park City"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Park Forest"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Park Ridge"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Pekin"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Peoria"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Peoria Heights"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Peru"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Plainfield"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Pontiac"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Princeton"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Prospect Heights"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Quincy"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Rantoul"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Richton Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "River Forest"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "River Grove"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Riverdale"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Riverside"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Robbins"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Robinson"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Rochelle"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Rock Falls"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Rock Island"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Rockford"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Rolling Meadows"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Romeoville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Roscoe"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Roselle"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Round Lake Beach"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Round Lake Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Salem"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Sandwich"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Sauk Village"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Schaumburg"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Schiller Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Shiloh"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Shorewood"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Silvis"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Skokie"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "South Elgin"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "South Holland"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Springfield"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "St. Charles"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Steger"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Sterling"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Stickney"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Streamwood"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Streator"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Summit"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Swansea"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Sycamore"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Taylorville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Tinley Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Troy"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "University Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Urbana"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Vandalia"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Vernon Hills"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Villa Park"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Warrenville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Washington"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Waterloo"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Wauconda"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Waukegan"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "West Chicago"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "West Frankfort"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Westchester"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Western Springs"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Westmont"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Wheaton"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Wheeling"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Willowbrook"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Wilmette"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Winfield"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Winnetka"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Winthrop Harbor"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Wonder Lake"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Wood Dale"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Wood River"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Woodridge"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Woodstock"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Worth"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Yorkville"
        },
        {
            "state": "Illinois",
            "sc": "IL",
            "city": "Zion"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Aliquippa"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Allentown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Altoona"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Ambler"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Ambridge"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Archbald"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Ardmore"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Audubon"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Back Mountain"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Baldwin"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Beaver Falls"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Bellefonte"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Bellevue"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Berwick"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Bethel Park"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Bethlehem"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Blakely"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Bloomsburg"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Blue Bell"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Bradford"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Brentwood"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Bristol"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Brookhaven"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Broomall"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Butler"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Camp Hill"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Canonsburg"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Carbondale"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Carlisle"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Carnegie"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Carnot-Moon"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Castle Shannon"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Catasauqua"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Chambersburg"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Chester"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Clairton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Clarion"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Clearfield"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Clifton Heights"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Coatesville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Collegeville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Collingdale"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Colonial Park"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Columbia"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Connellsville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Conshohocken"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Coraopolis"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Corry"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Crafton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Croydon"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Darby"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Darby Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Dickson City"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Dormont"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Downingtown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Doylestown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Drexel Hill"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "DuBois"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Dunmore"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Duquesne"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "East Norriton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "East Stroudsburg"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "East York"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Easton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Economy"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Edinboro"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Elizabethtown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Ellwood City"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Emmaus"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Ephrata"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Erie"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Fairless Hills"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Farrell"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Feasterville-Trevose"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Fernway"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Folcroft"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Folsom"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Forest Hills"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Franklin"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Franklin Park"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Fullerton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Gettysburg"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Glenolden"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Glenside"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Greensburg"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Greenville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Grove City"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Hampton Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Hanover"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Harleysville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Harrisburg"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Harrison Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Hatboro"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Hazleton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Hermitage"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Hershey"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Homeacre-Lyndora"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Horsham"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Huntingdon"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Indiana"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Jeannette"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Jefferson Hills"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Johnstown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Kennedy Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "King of Prussia"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Kingston"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Kulpsville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Lancaster"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Lansdale"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Lansdowne"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Latrobe"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Leacock-Leola-Bareville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Lebanon"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Levittown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Lewistown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Linglestown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Lionville-Marchwood"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Lititz"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Lock Haven"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Lower Allen"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Lower Burrell"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Maple Glen"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "McCandless Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "McKees Rocks"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "McKeesport"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Meadville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Mechanicsburg"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Middletown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Middletown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Millersville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Milton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Monaca"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Monessen"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Montgomeryville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Morrisville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Mount Carmel"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Mount Joy"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Mount Lebanon"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Mountain Top"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Munhall"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Municipality of Monroeville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Municipality of Murrysville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Nanticoke"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Nazareth"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Nether Providence Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "New Brighton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "New Castle"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "New Cumberland"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "New Kensington"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Norristown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "North Braddock"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "North Versailles"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Northampton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Northwest Harborcreek"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "O’Hara Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Oakmont"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Oil City"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Old Forge"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Palmyra"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Park Forest Village"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Parkville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Penn Hills"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Perkasie"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Philadelphia"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Phoenixville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Pittsburgh"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Pittston"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Pleasant Hills"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Plum"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Plymouth"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Pottstown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Pottsville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Progress"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Prospect Park"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Punxsutawney"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Quakertown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Radnor Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Reading"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Red Lion"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Richboro"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Ridley Park"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Robinson Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Ross Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Sanatoga"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Scott Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Scranton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Shaler Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Shamokin"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Sharon"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Shiloh"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Somerset"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Souderton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "South Park Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "South Williamsport"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Springfield"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "St. Marys"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "State College"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Stowe Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Sunbury"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Swarthmore"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Swissvale"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Tamaqua"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Taylor"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Titusville"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Trooper"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Turtle Creek"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Uniontown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Upper Providence Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Upper St. Clair"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Village Green-Green Ridge"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Warren"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Washington"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Waynesboro"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Weigelstown"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "West Chester"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "West Goshen"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "West Mifflin"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "West Norriton"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "West View"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "White Oak"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Whitehall"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Wilkes-Barre"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Wilkins Township"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Wilkinsburg"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Williamsport"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Willow Grove"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Willow Street"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Wilson"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Woodlyn"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Wyomissing"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "Yeadon"
        },
        {
            "state": "Pennsylvania",
            "sc": "PA",
            "city": "York"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Alexandria"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Anderson"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Angola"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Auburn"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Avon"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Batesville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Bedford"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Beech Grove"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Bloomington"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Bluffton"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Boonville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Brazil"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Brownsburg"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Carmel"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Cedar Lake"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Chesterton"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Clarksville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Columbia City"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Columbus"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Connersville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Crawfordsville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Crown Point"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Danville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Decatur"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Dyer"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "East Chicago"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Elkhart"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Elwood"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Evansville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Fishers"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Fort Wayne"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Frankfort"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Franklin"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Gary"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Goshen"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Granger"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Greencastle"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Greenfield"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Greensburg"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Greenwood"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Griffith"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Hammond"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Hartford City"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Highland"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Hobart"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Huntington"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Indianapolis"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Jasper"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Jeffersonville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Kendallville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Kokomo"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "La Porte"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Lafayette"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Lake Station"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Lakes of the Four Seasons"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Lawrence"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Lebanon"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Logansport"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Lowell"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Madison"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Marion"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Martinsville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Merrillville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Michigan City"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Mishawaka"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Mooresville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Mount Vernon"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Muncie"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Munster"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Nappanee"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "New Albany"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "New Castle"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "New Haven"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Noblesville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "North Manchester"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "North Vernon"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Peru"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Plainfield"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Plymouth"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Portage"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Portland"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Princeton"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Richmond"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Rochester"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Salem"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Schererville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Scottsburg"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Sellersburg"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Seymour"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Shelbyville"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "South Bend"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Speedway"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "St. John"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Tell City"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Terre Haute"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Valparaiso"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Vincennes"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Wabash"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Warsaw"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Washington"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "West Lafayette"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Westfield"
        },
        {
            "state": "Indiana",
            "sc": "IN",
            "city": "Zionsville"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Barrington"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Barrington"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Bristol"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Bristol"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Burrillville"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Central Falls"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Charlestown"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Coventry"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Cranston"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Cumberland"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Cumberland Hill"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "East Greenwich"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "East Providence"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Exeter"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Glocester"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Greenville"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Hopkinton"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Johnston"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Lincoln"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Middletown"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Narragansett"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Newport"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Newport East"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "North Kingstown"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "North Providence"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "North Providence"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "North Smithfield"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Pawtucket"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Portsmouth"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Providence"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Richmond"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Scituate"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Smithfield"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "South Kingstown"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Tiverton"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Tiverton"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Valley Falls"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Wakefield-Peacedale"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Warren"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Warwick"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "West Warwick"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "West Warwick"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Westerly"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Westerly"
        },
        {
            "state": "Rhode Island",
            "sc": "RI",
            "city": "Woonsocket"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Altoona"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Ames"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Ankeny"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Atlantic"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Bettendorf"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Boone"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Burlington"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Carroll"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Cedar Falls"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Cedar Rapids"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Charles City"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Clear Lake"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Clinton"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Clive"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Coralville"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Council Bluffs"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Creston"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Davenport"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Decorah"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Denison"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Des Moines"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Dubuque"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Estherville"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Fairfield"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Fort Dodge"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Fort Madison"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Grinnell"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Hiawatha"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Independence"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Indianola"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Iowa City"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Johnston"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Keokuk"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Knoxville"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Le Mars"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Maquoketa"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Marion"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Marshalltown"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Mason City"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Mount Pleasant"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Muscatine"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Nevada"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Newton"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Norwalk"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Oelwein"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Oskaloosa"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Ottumwa"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Pella"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Perry"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Red Oak"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Sioux Center"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Sioux City"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Spencer"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Storm Lake"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Urbandale"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Washington"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Waterloo"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Waverly"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "Webster City"
        },
        {
            "state": "Iowa",
            "sc": "IA",
            "city": "West Des Moines"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Aiken"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Anderson"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Beaufort"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Bennettsville"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Berea"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Burton"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Camden"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Cayce"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Charleston"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Chester"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Clemson"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Clinton"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Columbia"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Conway"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Darlington"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Dentsville"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Dillon"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Easley"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Five Forks"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Florence"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Forest Acres"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Fort Mill"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Fountain Inn"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Gaffney"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Gantt"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Garden City"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Georgetown"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Georgetown County"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Goose Creek"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Greenville"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Greenwood"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Greer"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Hanahan"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Hartsville"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Hilton Head Island"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Homeland Park"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Irmo"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Ladson"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Lake City"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Lancaster"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Laurel Bay"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Laurens"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Lexington"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Little River"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Lugoff"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Marion"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Mauldin"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Mount Pleasant"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Myrtle Beach"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Newberry"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "North Augusta"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "North Charleston"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "North Myrtle Beach"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Oak Grove"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Orangeburg"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Parker"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Red Bank"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Red Hill"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Rock Hill"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Sans Souci"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Seneca"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Seven Oaks"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Simpsonville"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Socastee"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Spartanburg"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "St. Andrews"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Summerville"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Sumter"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Taylors"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Union"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Wade Hampton"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Welcome"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "West Columbia"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "Woodfield"
        },
        {
            "state": "South Carolina",
            "sc": "SC",
            "city": "York"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Abilene"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Andover"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Arkansas City"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Atchison"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Augusta"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Bonner Springs"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Chanute"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Coffeyville"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Derby"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Dodge City"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "El Dorado"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Emporia"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Fort Riley North"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Fort Scott"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Garden City"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Gardner"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Great Bend"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Hays"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Haysville"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Hutchinson"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Independence"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Iola"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Junction City"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Kansas City"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Lansing"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Lawrence"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Leavenworth"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Leawood"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Lenexa"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Liberal"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Manhattan"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "McPherson"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Merriam"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Mission"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Newton"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Olathe"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Ottawa"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Overland Park"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Parsons"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Pittsburg"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Prairie Village"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Pratt"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Roeland Park"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Salina"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Shawnee"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Topeka"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Wellington"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Wichita"
        },
        {
            "state": "Kansas",
            "sc": "KS",
            "city": "Winfield"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Aberdeen"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Brookings"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Huron"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Madison"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Mitchell"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Pierre"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Rapid City"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Rapid Valley"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Sioux Falls"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Spearfish"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Sturgis"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Vermillion"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Watertown"
        },
        {
            "state": "South Dakota",
            "sc": "SD",
            "city": "Yankton"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Alexandria"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Ashland"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Bardstown"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Bellevue"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Berea"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Bowling Green"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Buechel"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Burlington"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Campbellsville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Corbin"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Covington"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Cynthiana"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Danville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Edgewood"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Elizabethtown"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Elsmere"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Erlanger"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Fairdale"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Fern Creek"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Flatwoods"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Florence"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Fort Campbell North"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Fort Knox"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Fort Mitchell"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Fort Thomas"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Frankfort"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Franklin"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Georgetown"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Glasgow"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Harrodsburg"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Henderson"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Highland Heights"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Highview"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Hillview"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Hopkinsville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Independence"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Jeffersontown"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Lawrenceburg"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Leitchfield"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Lexington-Fayette"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Louisville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Lyndon"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Madisonville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Mayfield"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Maysville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Middlesborough"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Mount Washington"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Murray"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Newburg"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Newport"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Nicholasville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Oak Grove"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Oakbrook"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Okolona"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Owensboro"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Paducah"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Paris"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Pikeville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Pleasure Ridge Park"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Princeton"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Radcliff"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Richmond"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Russellville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Shelbyville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Shepherdsville"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Shively"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Somerset"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "St. Dennis"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "St. Matthews"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Taylor Mill"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Valley Station"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Versailles"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Villa Hills"
        },
        {
            "state": "Kentucky",
            "sc": "KY",
            "city": "Winchester"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Alcoa"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Athens"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Bartlett"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Bloomingdale"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Brentwood"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Bristol"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Brownsville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Chattanooga"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Clarksville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Cleveland"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Clinton"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Collegedale"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Collierville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Colonial Heights"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Columbia"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Cookeville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Covington"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Crossville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Dayton"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Dickson"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Dyersburg"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "East Brainerd"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "East Ridge"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Elizabethton"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Farragut"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Fayetteville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Franklin"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Gallatin"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Germantown"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Goodlettsville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Green Hill"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Greeneville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Harriman"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Harrison"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Hendersonville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Humboldt"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Jackson"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Jefferson City"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Johnson City"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Kingsport"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Knoxville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "La Follette"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "La Vergne"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Lakeland"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Lawrenceburg"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Lebanon"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Lenoir City"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Lewisburg"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Lexington"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Manchester"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Martin"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Maryville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "McMinnville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Memphis"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Middle Valley"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Milan"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Millington"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Morristown"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Mount Juliet"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Murfreesboro"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Nashville-Davidson"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Newport"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Oak Ridge"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Paris"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Portland"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Pulaski"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Red Bank"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Ripley"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Savannah"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Sevierville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Seymour"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Shelbyville"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Signal Mountain"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Smyrna"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Soddy-Daisy"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "South Cleveland"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Spring Hill"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Springfield"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Tullahoma"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Union City"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "White House"
        },
        {
            "state": "Tennessee",
            "sc": "TN",
            "city": "Winchester"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Abbeville"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Alexandria"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Arabi"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Baker"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Bastrop"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Baton Rouge"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Bayou Cane"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Belle Chasse"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Bogalusa"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Bossier City"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Breaux Bridge"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Bridge City"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Brownsville-Bawcomville"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Carencro"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Chalmette"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Claiborne"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Covington"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Crowley"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "De Ridder"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Denham Springs"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Destrehan"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Donaldsonville"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Eden Isle"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Estelle"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Eunice"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Fort Polk South"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Franklin"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Galliano"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Gardere"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Gonzales"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Gretna"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Hammond"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Harahan"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Harvey"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Houma"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Jefferson"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Jennings"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Kenner"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Lacombe"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Lafayette"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Lake Charles"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Laplace"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Larose"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Leesville"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Luling"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Mandeville"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Marrero"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Meraux"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Merrydale"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Metairie"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Minden"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Monroe"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Morgan City"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Moss Bluff"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Natchitoches"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "New Iberia"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "New Orleans"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Oak Hills Place"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Oakdale"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Opelousas"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Pineville"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Plaquemine"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Prien"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Raceland"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Rayne"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Reserve"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "River Ridge"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Ruston"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Scott"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Shenandoah"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Shreveport"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Slidell"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "St. Martinville"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "St. Rose"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Sulphur"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Tallulah"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Terrytown"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Thibodaux"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Timberlane"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Village St. George"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Ville Platte"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Violet"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Waggaman"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "West Monroe"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Westwego"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Woodmere"
        },
        {
            "state": "Louisiana",
            "sc": "LA",
            "city": "Zachary"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Abilene"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Addison"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Alamo"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Alamo Heights"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Aldine"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Alice"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Allen"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Alvin"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Amarillo"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Anderson Mill"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Andrews"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Angleton"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Aransas Pass"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Arlington"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Atascocita"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Athens"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Austin"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Azle"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Bacliff"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Balch Springs"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Bay City"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Baytown"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Beaumont"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Bedford"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Beeville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Bellaire"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Bellmead"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Belton"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Benbrook"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Big Spring"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Boerne"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Bonham"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Borger"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Brenham"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Bridge City"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Brownfield"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Brownsville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Brownwood"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Brushy Creek"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Bryan"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Burkburnett"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Burleson"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Canyon"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Canyon Lake"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Carrollton"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Carthage"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Cedar Hill"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Cedar Park"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Channelview"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Childress"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Cinco Ranch"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Cleburne"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Cleveland"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Cloverleaf"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Clute"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "College Station"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Colleyville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Commerce"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Conroe"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Converse"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Coppell"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Copperas Cove"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Corinth"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Corpus Christi"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Corsicana"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Crockett"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Crowley"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Crystal City"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Cuero"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Dalhart"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Dallas"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Deer Park"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Del Rio"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Denison"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Denton"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "DeSoto"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Dickinson"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Donna"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Dumas"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Duncanville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Eagle Mountain"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Eagle Pass"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Edinburg"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Eidson Road"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "El Campo"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "El Paso"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Ennis"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Euless"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Fabens"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Farmers Branch"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Flower Mound"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Forest Hill"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Fort Bliss"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Fort Hood"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Fort Stockton"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Fort Worth"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Fredericksburg"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Freeport"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Fresno"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Friendswood"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Frisco"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Gainesville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Galena Park"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Galveston"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Garland"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Gatesville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Georgetown"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Gladewater"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Glenn Heights"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Gonzales"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Graham"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Grand Prairie"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Grapevine"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Greatwood"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Greenville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Groves"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Haltom City"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Harker Heights"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Harlingen"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Henderson"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Hereford"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Hewitt"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Hidalgo"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Highland Park"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Highland Village"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Highlands"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Hillsboro"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Hitchcock"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Homestead Meadows South"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Hondo"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Houston"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Humble"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Huntsville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Hurst"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Ingleside"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Iowa Park"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Irving"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Jacinto City"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Jacksonville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Jasper"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Jersey Village"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Jollyville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Katy"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Kaufman"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Keller"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Kerrville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Kilgore"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Killeen"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Kingsville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Kirby"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "La Feria"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "La Homa"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "La Marque"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "La Porte"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lackland AFB"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lake Dallas"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lake Jackson"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lakeway"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lamesa"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lampasas"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lancaster"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Laredo"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "League City"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Leander"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Leon Valley"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Levelland"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lewisville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Liberty"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Littlefield"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Live Oak"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lockhart"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Longview"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lubbock"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lufkin"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Lumberton"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Mansfield"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Marlin"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Marshall"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "McAllen"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "McKinney"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Mercedes"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Mesquite"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Mexia"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Midland"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Midlothian"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Mineral Wells"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Mission"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Mission Bend"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Missouri City"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Monahans"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Mount Pleasant"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Nacogdoches"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Navasota"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Nederland"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "New Braunfels"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "New Territory"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "North Richland Hills"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Odessa"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Orange"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Palestine"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Palmview South"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Pampa"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Paris"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Pasadena"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Pearland"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Pearsall"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Pecan Grove"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Pecos"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Perryton"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Pflugerville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Pharr"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Plainview"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Plano"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Pleasanton"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Port Arthur"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Port Lavaca"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Port Neches"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Portland"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Raymondville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Rendon"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Richardson"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Richland Hills"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Richmond"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Rio Grande City"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "River Oaks"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Robinson"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Robstown"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Rockport"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Rockwall"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Roma"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Rosenberg"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Round Rock"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Rowlett"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Sachse"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Saginaw"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "San Angelo"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "San Antonio"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "San Benito"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "San Elizario"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "San Juan"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "San Marcos"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Santa Fe"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Schertz"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Seabrook"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Seagoville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Seguin"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Sherman"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Silsbee"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Slaton"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Snyder"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Socorro"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "South Houston"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Southlake"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Spring"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Stafford"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Stephenville"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Sugar Land"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Sulphur Springs"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Sweetwater"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Taylor"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Temple"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Terrell"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Texarkana"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Texas City"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "The Colony"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "The Woodlands"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Tomball"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Trophy Club"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Tyler"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Universal City"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "University Park"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Uvalde"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Vernon"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Victoria"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Vidor"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Waco"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Watauga"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Waxahachie"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Weatherford"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Webster"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Wells Branch"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Weslaco"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "West Livingston"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "West Odessa"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "West University Place"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Wharton"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "White Settlement"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Wichita Falls"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Windemere"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Woodway"
        },
        {
            "state": "Texas",
            "sc": "TX",
            "city": "Wylie"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Auburn"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Augusta"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Bangor"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Bath"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Belfast"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Berwick"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Biddeford"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Brewer"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Brunswick"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Brunswick"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Buxton"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Cape Elizabeth"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Caribou"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Cumberland"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Ellsworth"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Fairfield"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Falmouth"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Farmington"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Freeport"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Gardiner"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Gorham"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Gray"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Hampden"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Houlton"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Kennebunk"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Kittery"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Lewiston"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Lisbon"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Old Orchard Beach"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Old Orchard Beach"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Old Town"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Orono"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Orono"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Portland"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Presque Isle"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Rockland"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Rumford"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Saco"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Sanford"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Sanford"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Scarborough"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Skowhegan"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Skowhegan"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "South Berwick"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "South Portland"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Standish"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Topsham"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Topsham"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Waterboro"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Waterville"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Wells"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Westbrook"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Windham"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Winslow"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Winslow"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Winthrop"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "Yarmouth"
        },
        {
            "state": "Maine",
            "sc": "ME",
            "city": "York"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Alpine"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "American Fork"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Bountiful"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Brigham City"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Canyon Rim"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Cedar City"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Centerville"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Clearfield"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Clinton"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Cottonwood Heights"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Cottonwood West"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Draper"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "East Millcreek"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Farmington"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Grantsville"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Heber"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Highland"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Holladay"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Hurricane"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Hyrum"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Kaysville"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Kearns"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Layton"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Lehi"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Lindon"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Little Cottonwood Creek Valley"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Logan"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Magna"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Midvale"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Millcreek"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Mount Olympus"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Murray"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "North Logan"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "North Ogden"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "North Salt Lake"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Ogden"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Oquirrh"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Orem"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Park City"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Payson"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Pleasant Grove"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Price"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Provo"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Richfield"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Riverdale"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Riverton"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Roy"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Salt Lake City"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Sandy"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Smithfield"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "South Jordan"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "South Ogden"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "South Salt Lake"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Spanish Fork"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Springville"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "St. George"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Summit Park"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Syracuse"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Taylorsville"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Tooele"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Vernal"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Washington"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Washington Terrace"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "West Jordan"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "West Point"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "West Valley City"
        },
        {
            "state": "Utah",
            "sc": "UT",
            "city": "Woods Cross"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Aberdeen"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Accokeek"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Adelphi"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Andrews AFB"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Annapolis"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Arbutus"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Arnold"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Aspen Hill"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Ballenger Creek"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Baltimore"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Bel Air"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Bel Air North"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Bel Air South"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Beltsville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Bennsville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Bethesda"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Bladensburg"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Bowie"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Bowleys Quarters"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Brooklyn Park"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Burtonsville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "California"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Calverton"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Cambridge"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Camp Springs"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Cape St. Claire"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Carney"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Catonsville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Chesapeake Ranch Estates-Drum Point"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Cheverly"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Chevy Chase"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Chillum"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Clinton"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Cloverly"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Cockeysville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Colesville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "College Park"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Columbia"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Coral Hills"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Crofton"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Cumberland"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Damascus"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Darnestown"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Dundalk"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "East Riverdale"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Easton"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Edgemere"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Edgewood"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Eldersburg"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Elkridge"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Elkton"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Ellicott City"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Essex"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Fairland"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Fallston"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Ferndale"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Forest Glen"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Forestville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Fort Meade"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Fort Washington"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Frederick"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Friendly"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Frostburg"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Gaithersburg"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Garrison"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Germantown"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Glen Burnie"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Glenarden"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Glenn Dale"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Greater Landover"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Greater Upper Marlboro"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Green Haven"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Green Valley"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Greenbelt"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Hagerstown"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Halfway"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Havre de Grace"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Hillcrest Heights"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Hyattsville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Jessup"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Joppatowne"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Kemp Mill"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Kettering"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "La Plata"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Lake Arbor"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Lake Shore"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Langley Park"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Lanham-Seabrook"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Lansdowne-Baltimore Highlands"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Largo"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Laurel"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Lexington Park"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Linganore-Bartonsville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Linthicum"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Lochearn"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Londontowne"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Lutherville-Timonium"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Marlow Heights"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Marlton"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Maryland City"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Mays Chapel"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Middle River"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Milford Mill"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Mitchellville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Montgomery Village"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Mount Airy"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Mount Rainier"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "New Carrollton"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "North Bethesda"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "North Kensington"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "North Laurel"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "North Potomac"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Ocean City"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Ocean Pines"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Odenton"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Olney"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Overlea"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Owings Mills"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Oxon Hill-Glassmanor"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Parkville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Parole"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Pasadena"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Perry Hall"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Pikesville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Potomac"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Randallstown"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Redland"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Reisterstown"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Riverdale Park"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Riverside"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Riviera Beach"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Rockville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Rosaryville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Rosedale"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Rossmoor"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Rossville"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Salisbury"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Savage-Guilford"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Severn"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Severna Park"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Silver Spring"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "South Gate"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "South Kensington"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "South Laurel"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "St. Charles"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Suitland-Silver Hill"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Takoma Park"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Temple Hills"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Towson"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Travilah"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Waldorf"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Walker Mill"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Westminster"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Wheaton-Glenmont"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "White Marsh"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "White Oak"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Woodlawn"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Woodlawn"
        },
        {
            "state": "Maryland",
            "sc": "MD",
            "city": "Woodmore"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Barre"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Barre"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Bennington"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Bennington"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Brattleboro"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Brattleboro"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Burlington"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Colchester"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Essex"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Essex Junction"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Hartford"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Middlebury"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Middlebury"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Milton"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Montpelier"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Rutland"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Shelburne"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "South Burlington"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Springfield"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "St. Albans"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "St. Johnsbury"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "St. Johnsbury"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Swanton"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Williston"
        },
        {
            "state": "Vermont",
            "sc": "VT",
            "city": "Winooski"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Abington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Abington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Acton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Acushnet"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Adams"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Agawam"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Amesbury"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Amesbury"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Amherst"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Amherst Center"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Andover"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Andover"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Arlington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Arlington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Ashland"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Athol"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Athol"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Attleboro"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Auburn"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Ayer"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Barnstable Town"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Bedford"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Belchertown"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Bellingham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Belmont"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Belmont"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Beverly"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Billerica"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Blackstone"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Boston"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Bourne"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Boxford"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Braintree"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Braintree"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Brewster"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Bridgewater"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Bridgewater"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Brockton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Brookline"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Brookline"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Burlington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Burlington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Cambridge"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Canton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Carver"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Charlton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Chatham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Chelmsford"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Chelsea"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Chicopee"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Clinton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Clinton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Cochituate"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Cohasset"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Concord"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Dalton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Danvers"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Danvers"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Dartmouth"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Dedham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Dedham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Dennis"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Dighton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Douglas"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Dracut"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Dudley"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Duxbury"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "East Bridgewater"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "East Falmouth"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "East Longmeadow"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Easthampton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Easton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Everett"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Fairhaven"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Fall River"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Falmouth"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Fitchburg"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Foxborough"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Framingham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Framingham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Franklin"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Freetown"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Gardner"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Georgetown"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Gloucester"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Grafton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Granby"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Great Barrington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Greenfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Greenfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Groton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Groveland"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Halifax"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Hamilton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Hanover"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Hanson"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Harwich"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Haverhill"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Hingham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Holbrook"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Holbrook"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Holden"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Holliston"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Holyoke"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Hopkinton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Hudson"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Hudson"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Hull"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Hull"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Ipswich"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Kingston"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lakeville"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lancaster"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lawrence"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Leicester"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Leominster"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lexington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lexington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lincoln"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Littleton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Longmeadow"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Longmeadow"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lowell"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Ludlow"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lunenburg"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lynn"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lynnfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Lynnfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Malden"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Mansfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Mansfield Center"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Marblehead"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Marblehead"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Marlborough"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Marshfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Mashpee"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Mattapoisett"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Maynard"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Maynard"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Medfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Medfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Medford"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Medway"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Melrose"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Merrimac"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Methuen"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Middleborough"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Middleborough Center"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Middleton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Milford"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Milford"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Millbury"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Millis"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Milton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Milton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Monson"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Montague"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Nantucket"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Natick"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Needham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Needham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "New Bedford"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Newbury"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Newburyport"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Newton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Norfolk"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "North Adams"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "North Amherst"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "North Andover"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "North Attleborough"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "North Attleborough Center"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "North Reading"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Northampton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Northborough"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Northborough"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Northbridge"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Norton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Norwell"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Norwood"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Norwood"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Orange"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Orleans"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Oxford"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Palmer"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Peabody"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Pembroke"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Pepperell"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Pinehurst"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Pittsfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Plainville"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Plymouth"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Plymouth"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Quincy"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Randolph"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Randolph"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Raynham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Reading"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Reading"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Rehoboth"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Revere"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Rockland"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Rockport"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Rutland"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Salem"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Salisbury"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Sandwich"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Saugus"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Saugus"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Scituate"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Seekonk"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Sharon"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Shirley"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Shrewsbury"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Somerset"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Somerset"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Somerville"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "South Hadley"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "South Yarmouth"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Southborough"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Southbridge"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Southbridge"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Southwick"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Spencer"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Spencer"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Springfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Sterling"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Stoneham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Stoneham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Stoughton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Sturbridge"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Sudbury"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Sutton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Swampscott"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Swampscott"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Swansea"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Taunton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Templeton"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Tewksbury"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Topsfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Townsend"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Tyngsborough"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Uxbridge"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Wakefield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Wakefield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Walpole"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Waltham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Ware"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Ware"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Wareham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Watertown"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Wayland"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Webster"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Webster"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Wellesley"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Wellesley"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "West Boylston"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "West Bridgewater"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "West Springfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "West Springfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "West Yarmouth"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Westborough"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Westfield"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Westford"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Westminster"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Weston"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Westport"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Westwood"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Weymouth"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Weymouth"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Whitinsville"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Whitman"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Wilbraham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Williamstown"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Wilmington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Wilmington"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Winchendon"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Winchester"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Winchester"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Winthrop"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Winthrop"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Woburn"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Worcester"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Wrentham"
        },
        {
            "state": "Massachusetts",
            "sc": "MA",
            "city": "Yarmouth"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Abingdon"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Alexandria"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Annandale"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Aquia Harbour"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Arlington"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Ashland"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Bailey’s Crossroads"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Bedford"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Belle Haven"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Blacksburg"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Bon Air"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Bristol"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Buena Vista"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Bull Run"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Burke"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Cave Spring"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Centreville"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Chantilly"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Charlottesville"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Chesapeake"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Chester"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Christiansburg"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Collinsville"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Colonial Heights"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Covington"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Culpeper"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Dale City"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Danville"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Dumbarton"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Dunn Loring"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "East Highland Park"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Fairfax"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Falls Church"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Farmville"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Forest"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Fort Belvoir"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Fort Hunt"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Fort Lee"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Franconia"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Franklin"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Fredericksburg"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Front Royal"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Galax"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Glen Allen"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Gloucester Point"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Great Falls"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Groveton"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Hampton"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Harrisonburg"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Herndon"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Highland Springs"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Hollins"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Hopewell"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Huntington"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Hybla Valley"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Idylwood"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Jefferson"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Lake Barcroft"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Lake Monticello"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Lake Ridge"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Lakeside"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Laurel"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Leesburg"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Lexington"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Lincolnia"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Linton Hall"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Lorton"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Lynchburg"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Madison Heights"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Manassas"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Manassas Park"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Mantua"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Marion"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Martinsville"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "McLean"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Mechanicsville"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Merrifield"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Montclair"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Montrose"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Mount Vernon"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Newington"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Newport News"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Norfolk"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "North Springfield"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Oakton"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Petersburg"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Pimmit Hills"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Poquoson"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Portsmouth"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Pulaski"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Quantico Station"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Radford"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Reston"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Richmond"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Roanoke"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Rose Hill"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Salem"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Seven Corners"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Smithfield"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "South Boston"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Springfield"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Staunton"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Stuarts Draft"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Sudley"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Suffolk"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Timberlake"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Tuckahoe"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Tysons Corner"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Vienna"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Vinton"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Virginia Beach"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Warrenton"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Waynesboro"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "West Gate"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "West Springfield"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Williamsburg"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Winchester"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Wolf Trap"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Woodbridge"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Wyndham"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Wytheville"
        },
        {
            "state": "Virginia",
            "sc": "VA",
            "city": "Yorkshire"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Adrian"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Albion"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Allen Park"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Allendale"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Alma"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Alpena"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Ann Arbor"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Auburn Hills"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Battle Creek"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Bay City"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Beecher"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Benton Harbor"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Berkley"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Beverly Hills"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Big Rapids"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Birmingham"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Bloomfield Township"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Bridgeport"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Brighton"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Buena Vista"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Burton"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Cadillac"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Canton"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Carrollton"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Center Line"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Charlotte"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Clawson"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Clinton"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Coldwater"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Comstock Park"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Cutlerville"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Dearborn"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Dearborn Heights"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Detroit"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Dowagiac"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "East Grand Rapids"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "East Lansing"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Eastpointe"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Eastwood"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Ecorse"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Escanaba"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Fair Plain"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Farmington"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Farmington Hills"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Fenton"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Ferndale"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Flat Rock"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Flint"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Flushing"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Forest Hills"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Fraser"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Garden City"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Grand Blanc"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Grand Haven"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Grand Ledge"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Grand Rapids"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Grandville"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Greenville"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Grosse Ile"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Grosse Pointe Farms"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Grosse Pointe Park"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Grosse Pointe Woods"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Hamtramck"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Harper Woods"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Harrison"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Haslett"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Hastings"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Hazel Park"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Highland Park"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Hillsdale"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Holland"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Holly"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Holt"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Houghton"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Howell"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Hudsonville"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Huntington Woods"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Inkster"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Ionia"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Iron Mountain"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Ironwood"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Ishpeming"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Jackson"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Jenison"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Kalamazoo"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Kentwood"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Lambertville"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Lansing"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Lapeer"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Lincoln Park"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Livonia"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Ludington"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Madison Heights"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Manistee"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Marquette"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Marshall"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Marysville"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Mason"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Melvindale"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Menominee"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Midland"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Milford"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Monroe"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Mount Clemens"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Mount Pleasant"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Muskegon"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Muskegon Heights"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "New Baltimore"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Niles"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Northview"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Northville"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Norton Shores"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Novi"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Oak Park"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Okemos"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Owosso"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Petoskey"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Plymouth"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Plymouth Township"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Pontiac"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Port Huron"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Portage"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Redford"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "River Rouge"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Riverview"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Rochester"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Rochester Hills"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Romulus"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Roseville"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Royal Oak"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Saginaw"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Saginaw Township North"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Saginaw Township South"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Saline"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Sault Ste. Marie"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Shelby"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Shields"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "South Lyon"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "South Monroe"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Southfield"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Southgate"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "St. Clair Shores"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "St. Johns"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "St. Joseph"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Sterling Heights"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Sturgis"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Taylor"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Tecumseh"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Temperance"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Three Rivers"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Traverse City"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Trenton"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Troy"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Walker"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Walled Lake"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Warren"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Waterford"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Waverly"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Wayne"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "West Bloomfield Township"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Westland"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Westwood"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Whitmore Lake"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Wixom"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Woodhaven"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Wyandotte"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Wyoming"
        },
        {
            "state": "Michigan",
            "sc": "MI",
            "city": "Ypsilanti"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Aberdeen"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Alderwood Manor"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Anacortes"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Arlington"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Artondale"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Auburn"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Bainbridge Island"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Bangor Trident Base"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Battle Ground"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Bellevue"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Bellingham"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Bonney Lake"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Bothell"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Bremerton"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Brier"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Bryn Mawr-Skyway"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Burien"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Burlington"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Camano"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Camas"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Cascade-Fairwood"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Centralia"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Chehalis"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Cheney"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Clarkston"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Clarkston Heights-Vineland"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "College Place"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Cottage Lake"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Covington"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Des Moines"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Dishman"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "East Hill-Meridian"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "East Renton Highlands"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "East Wenatchee Bench"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Edgewood"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Edmonds"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Elk Plain"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Ellensburg"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Enumclaw"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Ephrata"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Everett"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Fairwood"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Federal Way"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Ferndale"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Five Corners"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Fort Lewis"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Gig Harbor"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Graham"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Grandview"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Hazel Dell North"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Hazel Dell South"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Hobart"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Hoquiam"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Inglewood-Finn Hill"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Issaquah"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Kelso"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Kenmore"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Kennewick"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Kent"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Kingsgate"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Kirkland"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lacey"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lake Forest Park"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lake Morton-Berrydale"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lake Shore"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lake Stevens"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lakeland North"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lakeland South"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lakewood"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lea Hill"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Longview"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lynden"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Lynnwood"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Maltby"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Maple Valley"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Martha Lake"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Marysville"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Mercer Island"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Midland"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Mill Creek"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Mill Plain"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Minnehaha"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Monroe"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Moses Lake"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Mount Vernon"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Mountlake Terrace"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Mukilteo"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Newcastle"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Normandy Park"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "North Creek"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "North Marysville"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Oak Harbor"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Olympia"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Opportunity"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Orchards"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Otis Orchards-East Farms"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Paine Field-Lake Stickney"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Parkland"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Parkwood"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Pasco"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Picnic Point-North Lynnwood"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Port Angeles"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Port Orchard"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Port Townsend"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Poulsbo"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Prairie Ridge"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Pullman"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Puyallup"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Redmond"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Renton"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Richland"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Riverton-Boulevard Park"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Salmon Creek"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Sammamish"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "SeaTac"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Seattle"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Seattle Hill-Silver Firs"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Sedro-Woolley"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Selah"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Shelton"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Shoreline"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Silverdale"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Snohomish"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "South Hill"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Spanaway"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Spokane"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Steilacoom"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Summit"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Sumner"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Sunnyside"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Tacoma"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Terrace Heights"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Toppenish"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Tukwila"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Tumwater"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Union Hill-Novelty Hill"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "University Place"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Vancouver"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Vashon"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Veradale"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Walla Walla"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Waller"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Walnut Grove"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Washington"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Washougal"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Wenatchee"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "West Lake Stevens"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "West Richland"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "West Valley"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "White Center"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Woodinville"
        },
        {
            "state": "Washington",
            "sc": "WA",
            "city": "Yakima"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Albert Lea"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Alexandria"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Andover"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Anoka"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Apple Valley"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Arden Hills"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Austin"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Bemidji"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Big Lake"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Blaine"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Bloomington"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Brainerd"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Brooklyn Center"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Brooklyn Park"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Buffalo"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Burnsville"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Champlin"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Chanhassen"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Chaska"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Cloquet"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Columbia Heights"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Coon Rapids"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Cottage Grove"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Crookston"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Crystal"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Detroit Lakes"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Duluth"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Eagan"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "East Bethel"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "East Grand Forks"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Eden Prairie"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Edina"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Elk River"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Fairmont"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Faribault"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Farmington"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Fergus Falls"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Forest Lake"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Fridley"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Golden Valley"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Grand Rapids"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Ham Lake"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Hastings"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Hermantown"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Hibbing"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Hopkins"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Hugo"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Hutchinson"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "International Falls"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Inver Grove Heights"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Lake Elmo"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Lakeville"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Lino Lakes"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Litchfield"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Little Canada"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Little Falls"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Mahtomedi"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Mankato"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Maple Grove"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Maplewood"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Marshall"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Mendota Heights"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Minneapolis"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Minnetonka"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Monticello"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Moorhead"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Mound"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Mounds View"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "New Brighton"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "New Hope"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "New Ulm"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "North Branch"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "North Mankato"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "North St. Paul"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Northfield"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Oak Grove"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Oakdale"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Orono"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Otsego"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Owatonna"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Plymouth"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Prior Lake"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Ramsey"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Red Wing"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Richfield"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Robbinsdale"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Rochester"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Rosemount"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Roseville"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Sartell"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Sauk Rapids"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Savage"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Shakopee"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Shoreview"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Shorewood"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "South St. Paul"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Spring Lake Park"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "St. Anthony"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "St. Cloud"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "St. Louis Park"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "St. Michael"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "St. Paul"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "St. Peter"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Stillwater"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Thief River Falls"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Vadnais Heights"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Virginia"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Waconia"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Waite Park"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Waseca"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "West St. Paul"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "White Bear Lake"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Willmar"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Winona"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Woodbury"
        },
        {
            "state": "Minnesota",
            "sc": "MN",
            "city": "Worthington"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Beckley"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Bluefield"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Bridgeport"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Charleston"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Cheat Lake"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Clarksburg"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Cross Lanes"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Dunbar"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Elkins"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Fairmont"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Huntington"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Martinsburg"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Morgantown"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Moundsville"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Nitro"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Oak Hill"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Parkersburg"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Pea Ridge"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Princeton"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "South Charleston"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "St. Albans"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Teays Valley"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Vienna"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Weirton"
        },
        {
            "state": "West Virginia",
            "sc": "WV",
            "city": "Wheeling"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Aberdeen"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Amory"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Batesville"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Bay St. Louis"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Biloxi"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Booneville"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Brandon"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Brookhaven"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Byram"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Canton"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Clarksdale"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Cleveland"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Clinton"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Columbia"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Columbus"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Corinth"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "D’Iberville"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Gautier"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Greenville"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Greenwood"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Grenada"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Gulfport"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Hattiesburg"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Hernando"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Holly Springs"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Horn Lake"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Indianola"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Jackson"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Kosciusko"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Laurel"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Long Beach"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Louisville"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Madison"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "McComb"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Meridian"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Moss Point"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Natchez"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "New Albany"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Ocean Springs"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Olive Branch"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Oxford"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Pascagoula"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Pass Christian"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Pearl"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Petal"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Philadelphia"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Picayune"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Richland"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Ridgeland"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Senatobia"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Southaven"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "St. Martin"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Starkville"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Tupelo"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Vicksburg"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Waveland"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "West Hattiesburg"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "West Point"
        },
        {
            "state": "Mississippi",
            "sc": "MS",
            "city": "Yazoo City"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Allouez"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Altoona"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Antigo"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Appleton"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Ashland"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Ashwaubenon"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Baraboo"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Beaver Dam"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Bellevue"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Bellevue Town"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Beloit"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Beloit"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Brookfield"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Brookfield"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Brown Deer"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Burlington"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Burlington"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Caledonia"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Cedarburg"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Chippewa Falls"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Cudahy"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "De Pere"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "DeForest"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Delafield"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Delafield"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Delavan"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Eau Claire"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Elkhorn"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Elm Grove"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Fitchburg"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Fond du Lac"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Fort Atkinson"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Fox Point"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Franklin"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Genesee"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Germantown"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Glendale"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Grafton"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Grand Chute"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Grand Rapids"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Green Bay"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Greendale"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Greenfield"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Greenville"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Hales Corners"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Hartford"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Hartland"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Holmen"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Howard"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Hudson"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Hudson"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Janesville"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Jefferson"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Kaukauna"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Kenosha"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Kimberly"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "La Crosse"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Lake Geneva"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Lisbon"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Little Chute"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Madison"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Madison"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Manitowoc"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Marinette"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Marshfield"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "McFarland"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Menasha"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Menasha"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Menomonee Falls"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Menomonie"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Mequon"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Merrill"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Merton"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Middleton"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Milwaukee"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Monona"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Monroe"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Mount Pleasant"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Mukwonago"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Mukwonago"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Muskego"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Neenah"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "New Berlin"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "New London"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "New Richmond"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Norway"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Oak Creek"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Oconomowoc"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Oconomowoc"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Onalaska"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Oregon"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Oshkosh"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Pewaukee"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Pewaukee"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Platteville"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Pleasant Prairie"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Plover"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Plymouth"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Port Washington"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Portage"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Prairie du Chien"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Racine"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Reedsburg"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Rhinelander"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Rib Mountain"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Rib Mountain"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Rice Lake"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Richfield"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Ripon"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "River Falls"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Salem"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Shawano"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Sheboygan"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Sheboygan Falls"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Shorewood"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Somers"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "South Milwaukee"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Sparta"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "St. Francis"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Stevens Point"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Stoughton"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Sturgeon Bay"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Suamico"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Sun Prairie"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Superior"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Sussex"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Tomah"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Two Rivers"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Vernon"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Verona"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Washington"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Watertown"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Waukesha"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Waukesha"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Waunakee"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Waupun"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Wausau"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Wauwatosa"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "West Allis"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "West Bend"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Weston"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Whitefish Bay"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Whitewater"
        },
        {
            "state": "Wisconsin",
            "sc": "WI",
            "city": "Wisconsin Rapids"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Casper"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Cheyenne"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Cody"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Evanston"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Gillette"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Green River"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Jackson"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Lander"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Laramie"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Rawlins"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Riverton"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Rock Springs"
        },
        {
            "state": "Wyoming",
            "sc": "WY",
            "city": "Sheridan"
        }
    ];
    /*Assigning states to states variable*/
    $scope.states = [
        {"state": "Alabama", "abb": "AL"},
        {"state": "Missouri", "abb": "MO"},
        {"state": "Alaska", "abb": "AK"},
        {"state": "Montana", "abb": "MT"},
        {"state": "Arizona", "abb": "AZ"},
        {"state": "Nebraska", "abb": "NE"},
        {"state": "Arkansas", "abb": "AR"},
        {"state": "Nevada", "abb": "NV"},
        {"state": "California", "abb": "CA"},
        {"state": "New Hampshire", "abb": "NH"},
        {"state": "Colorado", "abb": "CO"},
        {"state": "New Jersey", "abb": "NJ"},
        {"state": "Connecticut", "abb": "CT"},
        {"state": "New Mexico", "abb": "NM"},
        {"state": "Delaware", "abb": "DE"},
        {"state": "New York", "abb": "NY"},
        {"state": "Columbia", "abb": "DC"},
        {"state": "North Carolina", "abb": "NC"},
        {"state": "Florida", "abb": "FL"},
        {"state": "North Dakota", "abb": "ND"},
        {"state": "Georgia", "abb": "GA"},
        {"state": "Ohio", "abb": "OH"},
        {"state": "Hawaii", "abb": "HI"},
        {"state": "Oklahoma", "abb": "OK"},
        {"state": "Idaho", "abb": "ID"},
        {"state": "Oregon", "abb": "OR"},
        {"state": "Illinois", "abb": "IL"},
        {"state": "Pennsylvania", "abb": "PA"},
        {"state": "Indiana", "abb": "IN"},
        {"state": "Rhode Island", "abb": "RI"},
        {"state": "Iowa", "abb": "IA"},
        {"state": "South Carolina", "abb": "SC"},
        {"state": "Kansas", "abb": "KS"},
        {"state": "South Dakota", "abb": "SD"},
        {"state": "Kentucky", "abb": "KY"},
        {"state": "Tennessee", "abb": "TN"},
        {"state": "Louisiana", "abb": "LA"},
        {"state": "Texas", "abb": "TX"},
        {"state": "Maine", "abb": "ME"},
        {"state": "Utah", "abb": "UT"},
        {"state": "Maryland", "abb": "MD"},
        {"state": "Vermont", "abb": "VT"},
        {"state": "Massachusetts", "abb": "MA"},
        {"state": "Virginia", "abb": "VA"},
        {"state": "Michigan", "abb": "MI"},
        {"state": "Washington", "abb": "WA"},
        {"state": "Minnesota", "abb": "MN"},
        {"state": "West Virginia", "abb": "WV"},
        {"state": "Mississippi", "abb": "MS"},
        {"state": "Wisconsin", "abb": "WI"},
        {"state": "Wyoming", "abb": "WY"},
    ];

    /* Fill the city dropdown based on selected state. */
    $scope.fillCity = function () {
        let stateCode = document.getElementById('statecode').value;
        $scope.cities = $scope.statecity.filter(function (s) {
            return s.sc === stateCode;
        });
    };

    /*
     * Call the Weather API and get the Weather report based on selected State and City.
     * If State or City is not selected show the error message.
    */
    $scope.displayWeather = function () {
        let stateCode = document.getElementById('statecode').value;
        let cityName = document.getElementById('cityname').value;
        if (stateCode === "0" || cityName === "0") {
            $scope.errorMsg = true;
        }
        else {
            $http.get('http://api.wunderground.com/api/4bbbc25f4f5946dd/hourly/q/' + stateCode + '/' + cityName + '.json')
                .success(function (data) {
                    console.log(data);
                    $scope.errorMsg = false;
                    $scope.result = data["hourly_forecast"];
                });
        }
    };
});