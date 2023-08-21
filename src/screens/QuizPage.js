import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  StyleSheet, // Import StyleSheet module
} from 'react-native';
import { COLORS, SIZES } from '../quizconstants';
import data from '../data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuizPage = () => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View style={styles.questionContainer}>
        {/* Question Counter */}
        <View style={styles.questionCounter}>
          <Text style={styles.questionCounterText}>
            {currentQuestionIndex + 1}
          </Text>
          <Text style={styles.questionCounterText}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text style={styles.questionText}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };

  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={[
              styles.optionButton,
              {
                borderColor: option == correctOption
                  ? COLORS.success
                  : option == currentOptionSelected
                    ? COLORS.error
                    : `${COLORS.secondary}40`,
                backgroundColor: option == correctOption
                  ? `${COLORS.success}20`
                  : option == currentOptionSelected
                    ? `${COLORS.error}20`
                    : `${COLORS.secondary}20`,
              },
            ]}
          >
            <Text style={styles.optionText}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {option == correctOption ? (
              <View style={[styles.checkOrCross, { backgroundColor: COLORS.success }]}>
                <MaterialCommunityIcons
                  name="check"
                  style={styles.checkOrCrossIcon}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View style={[styles.checkOrCross, { backgroundColor: COLORS.error }]}>
                <MaterialCommunityIcons
                  name="close"
                  style={styles.checkOrCrossIcon}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%'],
  });

  const renderProgressBar = () => {
    return (
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[styles.progressBarFill, { width: progressAnim }]}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        {/* ProgressBar */}
        {renderProgressBar()}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View style={styles.scoreModal}>
            <View style={styles.scoreModalContent}>
              <Text style={styles.scoreModalTitle}>
                {score > allQuestions.length / 2
                  ? 'Congratulations!'
                  : 'Oops!'}
              </Text>
              <View style={styles.scoreValueContainer}>
                <Text
                  style={[
                    styles.scoreValue,
                    {
                      color:
                        score > allQuestions.length / 2
                          ? COLORS.success
                          : COLORS.error,
                    },
                  ]}
                >
                  {score}
                </Text>
                <Text style={styles.scoreDivider}>/ {allQuestions.length}</Text>
              </View>
              {/* Retry Quiz button */}
              <TouchableOpacity
                onPress={restartQuiz}
                style={styles.retryButton}
              >
                <Text style={styles.retryButtonText}>Retry Quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Background Image */}
        <Image
          source={require('../images/DottedBG.png')}
          style={styles.backgroundImage}
          resizeMode={'contain'}
        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
    position: 'relative',
  },
  progressBarContainer: {
    width: '100%',
    height: 20,
    borderRadius: 20,
    backgroundColor: '#00000020',
  }, // Close progressBarContainer
  progressBarFill: {
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.accent,
  }, // Open progressBarFill
  questionContainer: {
    marginVertical: 40,
  },
  questionCounter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  questionCounterText: {
    color: COLORS.white,
    fontSize: 20,
    opacity: 0.6,
    marginRight: 2,
  },
  questionText: {
    color: COLORS.white,
    fontSize: 30,
  },
  optionButton: {
    borderWidth: 3,
    height: 60,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  optionText: {
    fontSize: 20,
    color: COLORS.white,
  },
  checkOrCross: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkOrCrossIcon: {
    color: COLORS.white,
    fontSize: 20,
  },
  nextButton: {
    marginTop: 20,
    width: '100%',
    backgroundColor: COLORS.accent,
    padding: 20,
    borderRadius: 5,
  },
  nextButtonText: {
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center',
  },
  scoreModal: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreModalContent: {
    backgroundColor: COLORS.white,
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  scoreModalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  scoreValueContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
  },
  scoreValue: {
    fontSize: 30,
  },
  scoreDivider: {
    fontSize: 20,
    color: COLORS.black,
  },
  retryButton: {
    backgroundColor: COLORS.accent,
    padding: 20,
    width: '100%',
    borderRadius: 20,
  },
  retryButtonText: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 20,
  },
  backgroundImage: {
    width: SIZES.width,
    height: 130,
    zIndex: -1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
  },
});


export default QuizPage;

