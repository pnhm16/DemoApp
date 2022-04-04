import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Directions, TextInput} from 'react-native-gesture-handler';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
//component = function
function AboutFoodScreen(props) {
  return (
    
    <View
      style={{
        backgroundColor: '#F0F8FF',
        flex: 100,
      }}>
        <View>
  <Text>Nurtition Advice</Text>
  <LineChart
    data={{
      labels: ["Fat", "Meat", "Vegetable", "Fish", "Powder", "Extra things ..."],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
      <View
        style={{
          flex: 10,
          justifyContent: 'flex-start',
          marginTop: 25,
          flexDirection: 'row',
        }}>
        <View>
          <Text
            style={{
              fontSize: 30,
              marginLeft: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Homemade Pizza
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 30,
          backgroundColor: 'white',
          borderRadius: 20,
          margin: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/pizza.png')}
            style={{
              width: 130,
              height: 130,
              marginTop: 50,
              marginLeft: 25,
            }}
          />
          <View
            style={{
              marginLeft: 40,
              marginTop: 45,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              120g
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Protein
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              15g
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Fat
            </Text>
          </View>
          <View
            style={{
              marginLeft: 40,
              marginTop: 45,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              82g
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Carbo
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              653
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Calories
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 25,
          backgroundColor: '#F0F8FF',
          margin: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            marginVertical: 30,
            marginLeft: 20,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 40,
              height: 80,
              width: 80,
            }}>
            <Image
              source={require('../assets/tomato.png')}
              style={{
                width: 50,
                height: 50,
                marginVertical: 15,
                marginHorizontal: 15,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                marginLeft: 6,
                marginTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Tomato
            </Text>
            <Text
              style={{
                marginLeft: 25,
                fontSize: 15,
              }}>
              12g
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 30,
            marginLeft: 40,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 40,
              marginLeft:10,
              height: 80,
              width: 80,
            }}>
            <Image
              source={require('../assets/mushroom.png')}
              style={{
                width: 50,
                height: 50,
                marginVertical: 15,
                marginHorizontal: 15,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                marginLeft: 2,
                marginTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Mushroom
            </Text>
            <Text
              style={{
                marginLeft: 38,
                fontSize: 15,
              }}>
              14g
            </Text>
          </View>
        </View><View
          style={{
            marginVertical: 30,
            marginLeft: 35,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 40,
              marginLeft:2,
              height: 80,
              width: 80,
            }}>
            <Image
              source={require('../assets/avocado.png')}
              style={{
                width: 50,
                height: 50,
                marginVertical: 15,
                marginHorizontal: 15,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                marginLeft: 2,
                marginTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Avocado
            </Text>
            <Text
              style={{
                marginLeft: 22,
                fontSize: 15,
              }}>
              11g
            </Text>
          </View>
        </View>
      </View>
      
      <View
        style={{
          flex:40,
          backgroundColor: '#F0F8FF',
          borderRadius: 20,
          margin: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            marginTop: 20,
            marginLeft: 20,
            fontWeight:'bold',
          }}>
          Preparation
        </Text>
        <Text
          style={{
            fontSize:20,
            marginHorizontal:20,
          }}>
          
        </Text>
      </View>
    </View>
  );
}

export default AboutFoodScreen;