# XSS_SEED_LABS
# SEED Labs XSS Exploit Solutions

This repository contains example solutions for the Cross-Site Scripting (XSS) lab from the [SEED Labs project](https://seedsecuritylabs.org/). The provided scripts demonstrate real-world XSS attack vectors in a controlled educational environment.

## Overview

The scripts simulate three XSS attack scenarios targeting the Elgg social platform:

1. **Friend Request Exploit**  
   Automatically sends a friend request to a specific user (GUID 59).

2. **Profile Modification Exploit**  
   Modifies the victim's profile to display "Hacked" messages.

3. **Self-Propagating XSS Worm**  
   Injects malicious code that spreads to other users' profiles upon viewing.

## Exploit Details

### 1. Friend Request Exploit (`friend_add.js`)
- **Target**: Adds Samy (GUID 59) as a friend without user consent.
- **Mechanism**: Uses a `GET` request to `/action/friends/add` with Elgg security tokens.
- **Key Components**:
  - Extracts `__elgg_ts` and `__elgg_token` for CSRF protection bypass.
  - Sends an automated XMLHttpRequest to the friend endpoint.

### 2. Profile Modification Exploit (`profile_edit.js`)
- **Target**: Edits the victim's profile to display "SamyWasHere!" and "YouGotHacked".
- **Mechanism**: Sends a `POST` request to `/action/profile/edit` with malicious payloads.
- **Key Components**:
  - Modifies profile fields like `name`, `description`, and access levels.
  - Avoids self-targeting by checking the user's GUID.

### 3. XSS Worm (`worm.js`)
- **Target**: Propagates itself to other users' profiles.
- **Mechanism**: Injects encoded JavaScript into the profile description, which executes when viewed.
- **Key Components**:
  - Self-replicates by embedding its own code into the victim's profile.
  - Uses URI encoding to avoid detection.
  - Includes checks to prevent targeting the attacker's own account (GUID 59).

## Usage

1. **Lab Setup**:
   - Deploy the vulnerable Elgg platform as per [SEED Labs instructions](https://seedsecuritylabs.org/Labs_20.04/Files/Web_XSS_Elgg/Web_XSS_Elgg.pdf).
   - Update variables in the scripts (e.g., `samyGuid`, server URLs) to match your environment.

2. **Testing the Exploits**:
   - Inject the scripts into vulnerable input fields (e.g., profile description).
   - Observe automatic friend requests/profile changes when users view the infected page.


## References

- [SEED Labs Official Website](https://seedsecuritylabs.org/)
- [Elgg Security Documentation](https://learn.elgg.org/en/stable/admin/security.html)

---

**Note**: Always ensure compliance with ethical guidelines and local laws when conducting security research.
