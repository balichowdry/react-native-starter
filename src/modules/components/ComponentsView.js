import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../styles';

import { Button, RadioGroup, Dropdown } from '../../components';

export default function ComponentsScreen(props) {
  const route = useRoute();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Segment Control</Text>

        <RadioGroup
          style={styles.demoItem}
          items={['First', 'Second', 'Third']}
          selectedIndex={props.radioGroupsState[0]}
          onChange={index =>
            props.setRadioGroupsState({ ...props.radioGroupsState, 0: index })
          }
        />

        <View
          style={{
            height: 1,
            alignSelf: 'stretch',
            backgroundColor: colors.bluish,
          }}
        />

        <RadioGroup
          underline
          style={styles.demoItem}
          items={['First', 'Second', 'Third', 'Fourth']}
          selectedIndex={props.radioGroupsState[1]}
          onChange={index =>
            props.setRadioGroupsState({ ...props.radioGroupsState, 1: index })
          }
        />
      </View>

      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Buttons</Text>

        <View style={styles.demoButtonsContainer}>

          <Button
            style={[styles.demoButton, { flexBasis: '47%' }]}
            primary
            rounded
            caption="Button"
            onPress={() => { }}
          />
          <Button
            style={[styles.demoButton, { flexBasis: '47%' }]}
            secondary
            rounded
            caption="Button"
            onPress={() => { }}
          />
          <Button
            style={[styles.demoButton, { flexBasis: '47%' }]}
            primary
            bordered
            caption="Button"
            onPress={() => { }}
          />
          <Button
            style={[styles.demoButton, { flexBasis: '47%' }]}
            secondary
            bordered
            caption="Button"
            onPress={() => { }}
          />
          <Button
            style={[styles.demoButton, { flexBasis: '47%' }]}
            primary
            bordered
            rounded
            caption="Button"
            onPress={() => { }}
          />
          <Button
            style={[styles.demoButton, { flexBasis: '47%' }]}
            secondary
            bordered
            rounded
            caption="Button"
            onPress={() => { }}
          />
        </View>
      </View>

      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Action Buttons</Text>

        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            action
            bgColor="#958FDA"
            onPress={() => { }}
          >
            <Text>
              <Icon name="chevron-thin-right" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#4F44C1"
            onPress={() => { }}
          >
            <Text>
              <Icon name="controller-paus" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#3CD4A0"
            onPress={() => { }}
          >
            <Text>
              <Icon name="magnifying-glass" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#EF1F78"
            onPress={() => { }}
          >
            <Text>
              <Icon name="paper-plane" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#52B1F4"
            onPress={() => { }}
          >
            <Text>
              <Icon name="flash" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#19D4E6"
            onPress={() => { }}
          >
            <Text>
              <Icon name="reply-all" size={20} color="white" />
            </Text>
          </Button>
        </View>
      </View>

      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Dropdown</Text>

        <Dropdown
          style={{ width: '100%', alignSelf: 'center' }}
          onSelect={() => { }}
          items={['option 1', 'option 2']}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  componentsSection: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 20,
    borderRadius: 5,
  },
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 24,
    marginBottom: 20,
  },
  demoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    marginBottom: 20,
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },
  demoItem: {
    marginVertical: 15,
  },
});
