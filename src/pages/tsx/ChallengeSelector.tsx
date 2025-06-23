import React from "react";
import styles from "../scss/ChallengeSelector.module.scss";
import { ISolution } from "../../types";

interface ChallengeSelectorProps {
  challenges: ISolution[];
  activeChallenge: string;
  onSelectChallenge: (id: string) => void;
}

/**
 * 사용자가 자신의 고민(챌린지)을 선택할 수 있는 카드형 필터 컴포넌트.
 */
function ChallengeSelector({
  challenges,
  activeChallenge,
  onSelectChallenge,
}: ChallengeSelectorProps) {
  return (
    <div className={styles.selectorContainer}>
      {challenges.map((challenge) => (
        <button
          key={challenge.id}
          className={`${styles.challengeCard} ${
            activeChallenge === challenge.id ? styles.active : ""
          }`}
          onClick={() => onSelectChallenge(challenge.id)}
        >
          {/* TODO: 각 챌린지에 맞는 아이콘 추가 */}
          <span>{challenge.name}</span>
        </button>
      ))}
    </div>
  );
}

export default ChallengeSelector;
