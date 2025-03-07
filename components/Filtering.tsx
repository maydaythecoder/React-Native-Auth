import React, { useState, useEffect } from 'react';
import { Input, InputField, Button, ButtonText, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, CloseIcon, Icon, Heading, ModalBackdrop, Text, HStack, View } from '@gluestack-ui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export default function Filtering () {
    const [showModal, setShowModal] = React.useState(false)
    const [searchQuery, setSearchQuery] = useState('');
  return (
    <HStack gap={2}>
    <Input flex={1}>
    <HStack alignItems="center" gap={2} marginLeft={4}>
    <MaterialIcons name="search" size={24} color="gray" />
        <InputField
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        </HStack>
      </Input>
    <Button onPress={() => setShowModal(true)} backgroundColor="transparent">
      <View>
      <MaterialIcons name="filter-list" size={24} color="gray" />
      </View>
    </Button>
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false)
      }}
      avoidKeyboard={true}
    >
      <ModalBackdrop />
      <ModalContent maxHeight="80%" borderTopLeftRadius="$lg" borderTopRightRadius="$lg">
        <ModalHeader>
          <Heading>
            Filters
          </Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>
            Filter properties by price, location, amenities and more.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            onPress={() => {
              setShowModal(false)
            }}
          >
            <ButtonText>Reset</ButtonText>
          </Button>
          <Button
            onPress={() => {
              setShowModal(false)
            }}
          >
            <ButtonText>Apply Filters</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </HStack>
  )
}