const chroma = require("chroma-js");
const { makeAlphaB, alphaC, alpha } = require("./utils");

/*
TODO:

- [ ] **complete first pass on:**
  - [x] info/warning/error/success statuses
  - [x] DIFF styling
  - [ ] gitlens
  - [x] git-decorations
  - [x] selection
  - [ ] highlight
  - [x] focus borders
  - [x] inputs / settings
  - [ ] searching / filtering
  - [x] boxes, widgets, menus
  - [x] toolbar
  - [ ] progress bars
- [ ] **complete second pass on:**
  - [x] activity bar
  - [x] status bar
  - [x] sidebar / explorer
  - [x] tabs
  - [x] buttons
*/

module.exports = ({
  ansi,
  foreground,
  darkForeground,
  brightForeground,
  background,
  // darkBackground,
  // bold,
  // links,
  cursorText,
  selection: selectionBackground,
  selectedText: selectionForeground,
}) => {
  const alphaB = makeAlphaB(background);

  const none = "#00000000";

  // diffs:
  const added = ansi.green; // syn. "inserted"
  const removed = ansi.red; // syn. "deleted"
  const modified = ansi.cyan;
  const ignored = alpha(foreground, 0.4);
  const untracked = ansi.yellow;

  // statuses:
  const info = ansi.blue;
  const warning = ansi.yellow;
  const error = ansi.red;
  // const success = ansi.green;

  // boxes:
  const boxBackground = alphaB(ansi.black, 0.5);
  const boxHoverBackground = alphaB(ansi.black, 0.75);
  const boxForeground = alphaC(boxBackground, ansi.brightBlack, 0.75);
  const boxBorder = alphaB(brightForeground, 0.25);

  // widgets:
  const widgetBackground = alphaB(darkForeground, 0.5);
  const widgetBorder = chroma(foreground).alpha(0.25).hex();
  const widgetForeground = foreground;
  const widgetHighlightForeground = brightForeground;
  const widgetStatusBarBackground = background;
  const widgetShadow = "#00000066";

  return {
    "activityBar.activeBackground": alphaB(ansi.green, 0.5),
    // "activityBar.activeBorder": brightForeground,
    // "activityBar.activeFocusBorder": null,
    "activityBar.background": background,
    // "activityBar.border": ansi.brightBlack,
    // "activityBar.dropBorder": foreground,
    "activityBar.foreground": ansi.brightCyan,
    "activityBar.inactiveForeground": alphaB(ansi.brightCyan, 0.4),

    "activityBarBadge.background": ansi.green,
    "activityBarBadge.foreground": brightForeground,

    "badge.background": ansi.red,
    "badge.foreground": brightForeground,

    // "banner.background": "#2c313a",
    // "banner.foreground": foreground,
    // "banner.iconForeground": info,

    // "breadcrumb.activeSelectionForeground": "#828aa0",
    // "breadcrumb.background": ansi.black,
    // "breadcrumb.focusForeground": "#828aa0",
    // "breadcrumb.foreground": alphaB(foreground, 0.8),

    // "breadcrumbPicker.background": background,

    "button.background": darkForeground,
    "button.border": none,
    "button.foreground": brightForeground,
    // "button.hoverBackground": foreground,
    "button.secondaryBackground": ansi.blue,
    "button.secondaryForeground": foreground,
    // "button.secondaryHoverBackground": ansi.brightBlue,
    "button.separator": alphaB(foreground, 0.4),

    "charts.blue": ansi.blue,
    "charts.foreground": foreground,
    "charts.green": ansi.green,
    "charts.lines": alphaB(foreground, 0.5),
    "charts.orange": ansi.yellow,
    "charts.purple": ansi.magenta,
    "charts.red": ansi.red,
    "charts.yellow": ansi.brightYellow,

    // "chat.requestBackground": alpha(brightForeground, "08"),
    // "chat.requestBorder": alpha(brightForeground, "1a"),

    // TODO:
    // "checkbox.background": "#1d1f23",
    // "checkbox.border": "#181a1f",
    // "checkbox.foreground": foreground,
    // "checkbox.selectBackground": background,
    // "checkbox.selectBorder": "#c5c5c5",

    // "commandCenter.activeBackground": alpha(brightForeground, "14"),
    // "commandCenter.activeBorder": alpha("#9da5b4", "4d"),
    // "commandCenter.activeForeground": "#9da5b4",
    // "commandCenter.background": alpha(brightForeground, "0d"),
    // "commandCenter.border": alphaB("#9da5b4", 0.2),
    // "commandCenter.foreground": "#9da5b4",
    // "commandCenter.inactiveBorder": alphaB("#6b717d", 0.2),
    // "commandCenter.inactiveForeground": "#6b717d",

    // "commentsView.resolvedIcon": alphaB("#cccccc", 0.5),
    // "commentsView.unresolvedIcon": alpha(foreground, "00"),

    // contrastActiveBorder: null,
    // "contrastBorder": null,

    // "debugConsole.errorForeground": error,
    // "debugConsole.infoForeground": info,
    // "debugConsole.sourceForeground": foreground,
    // "debugConsole.warningForeground": warning,

    // "debugConsoleInputIcon.foreground": foreground,

    // "debugExceptionWidget.background": "#420b0d",
    // "debugExceptionWidget.border": "#a31515",

    // "debugIcon.breakpointCurrentStackframeForeground": "#ffcc00",
    // "debugIcon.breakpointDisabledForeground": disabled,
    // "debugIcon.breakpointForeground": "#e51400",
    // "debugIcon.breakpointStackframeForeground": "#89d185",
    // "debugIcon.breakpointUnverifiedForeground": disabled,
    // "debugIcon.continueForeground": "#75beff",
    // "debugIcon.disconnectForeground": "#f48771",
    // "debugIcon.pauseForeground": "#75beff",
    // "debugIcon.restartForeground": "#89d185",
    // "debugIcon.startForeground": "#89d185",
    // "debugIcon.stepBackForeground": "#75beff",
    // "debugIcon.stepIntoForeground": "#75beff",
    // "debugIcon.stepOutForeground": "#75beff",
    // "debugIcon.stepOverForeground": "#75beff",
    // "debugIcon.stopForeground": "#f48771",

    // "debugTokenExpression.boolean": "#4e94ce",
    // "debugTokenExpression.error": "#f48771",
    // "debugTokenExpression.name": "#c586c0",
    // "debugTokenExpression.number": "#b5cea8",
    // "debugTokenExpression.string": "#ce9178",
    // "debugTokenExpression.value": alphaB("#cccccc", 0.6),

    // "debugToolBar.background": background,
    // "debugToolBar.border": null,

    // "debugView.exceptionLabelBackground": "#6c2022",
    // "debugView.exceptionLabelForeground": foreground,
    // "debugView.stateLabelBackground": alpha("#888888", "44"),
    // "debugView.stateLabelForeground": foreground,
    // "debugView.valueChangedHighlight": "#569cd6",

    // descriptionForeground: foreground,

    "diffEditor.border": none,
    "diffEditor.diagonalFill": alphaB(ansi.black, 0.5),
    "diffEditor.insertedLineBackground": alpha(added, 0.2),
    "diffEditor.insertedTextBackground": alpha(added, 0.5),
    "diffEditor.insertedTextBorder": none,
    // "diffEditor.move.border": alpha("#8b8b8b", "9c"),
    "diffEditor.removedLineBackground": alpha(removed, 0.2),
    "diffEditor.removedTextBackground": alpha(removed, 0.5),
    "diffEditor.removedTextBorder": none,
    // "diffEditor.unchangedCodeBackground": alpha("#747474", "29"),
    // "diffEditor.unchangedRegionBackground": "#3e3e3e",
    // "diffEditor.unchangedRegionForeground": "#a3a2a2",
    // "diffEditorGutter.insertedLineBackground": null,
    // "diffEditorGutter.removedLineBackground": null,
    // "diffEditorOverview.insertedForeground": null,
    // "diffEditorOverview.removedForeground": null,

    disabledForeground: alphaB(foreground, 0.5),

    // TODO:
    // "dropdown.background": "#1d1f23",
    // "dropdown.border": "#181a1f",
    // "dropdown.foreground": foreground,
    // "dropdown.listBackground": null,

    "editor.background": background,
    "editor.foreground": foreground,

    // TODO:
    // "editor.findMatchBackground": alphaB(ansi.blue, 0.4),
    // "editor.findMatchBorder": null,
    // "editor.findMatchHighlightBackground": "#314365",
    // "editor.findMatchHighlightBorder": null,
    // "editor.findRangeHighlightBackground": alphaB("#3a3d41", 0.4),
    // "editor.findRangeHighlightBorder": null,
    // "editor.focusedStackFrameHighlightBackground": alpha("#7abd7a", "4d"),
    // "editor.foldBackground": alpha("#677696", "1d"),
    // "editor.hoverHighlightBackground": alphaB("#264f78", 0.2),
    // "editor.inactiveSelectionBackground": alpha("#677696", "30"),
    // "editor.inlineValuesBackground": alphaB("#ffc800", 0.2),
    // "editor.inlineValuesForeground": alphaB(brightForeground, 0.5),
    "editor.lineHighlightBackground": alphaB(ansi.black, 0.5),
    "editor.lineHighlightBorder": none,
    // "editor.linkedEditingBackground": alpha("#ff0000", "4d"),
    // "editor.rangeHighlightBackground": alpha(ansi.blue, "30"),
    // "editor.rangeHighlightBorder": null,
    "editor.selectionBackground": selectionBackground,
    "editor.selectionForeground": selectionForeground,
    // "editor.selectionHighlightBackground": alpha(brightForeground, "10"),
    // "editor.selectionHighlightBorder": null,
    // "editor.snippetFinalTabstopHighlightBackground": null,
    // "editor.snippetFinalTabstopHighlightBorder": "#525252",
    // "editor.snippetTabstopHighlightBackground": alpha("#7c7c7c", "4d"),
    // "editor.snippetTabstopHighlightBorder": null,
    // "editor.stackFrameHighlightBackground": alphaB("#ffff00", 0.2),
    // "editor.symbolHighlightBackground": "#314365",
    // "editor.symbolHighlightBorder": null,
    // "editor.wordHighlightBackground": "#484e5b",
    // "editor.wordHighlightBorder": null,
    // "editor.wordHighlightStrongBackground": alpha(ansi.blue, "26"),
    // "editor.wordHighlightStrongBorder": null,
    // "editor.wordHighlightTextBackground": "#484e5b",
    // "editor.wordHighlightTextBorder": null,

    // "editorBracketHighlight.foreground1": "#ffd700",
    // "editorBracketHighlight.foreground2": "#da70d6",
    // "editorBracketHighlight.foreground3": "#179fff",
    // "editorBracketHighlight.foreground4": alpha("#000000", "00"),
    // "editorBracketHighlight.foreground5": alpha("#000000", "00"),
    // "editorBracketHighlight.foreground6": alpha("#000000", "00"),
    // "editorBracketHighlight.unexpectedBracket.foreground": alphaB("#ff1212", 0.8),

    // "editorBracketMatch.background": alpha(ansi.blue, "30"),
    // "editorBracketMatch.border": alpha(ansi.blue, "30"),

    // "editorBracketPairGuide.activeBackground1": alpha("#000000", "00"),
    // "editorBracketPairGuide.activeBackground2": alpha("#000000", "00"),
    // "editorBracketPairGuide.activeBackground3": alpha("#000000", "00"),
    // "editorBracketPairGuide.activeBackground4": alpha("#000000", "00"),
    // "editorBracketPairGuide.activeBackground5": alpha("#000000", "00"),
    // "editorBracketPairGuide.activeBackground6": alpha("#000000", "00"),
    // "editorBracketPairGuide.background1": alpha("#000000", "00"),
    // "editorBracketPairGuide.background2": alpha("#000000", "00"),
    // "editorBracketPairGuide.background3": alpha("#000000", "00"),
    // "editorBracketPairGuide.background4": alpha("#000000", "00"),
    // "editorBracketPairGuide.background5": alpha("#000000", "00"),
    // "editorBracketPairGuide.background6": alpha("#000000", "00"),

    // "editorCodeLens.foreground": "#999999",

    // "editorCommentsWidget.rangeActiveBackground": alpha(foreground, "00"),
    // "editorCommentsWidget.rangeActiveBorder": alpha(foreground, "00"),
    // "editorCommentsWidget.rangeBackground": alpha(foreground, "00"),
    // "editorCommentsWidget.rangeBorder": alpha(foreground, "00"),
    // "editorCommentsWidget.resolvedBorder": alphaB("#cccccc", 0.5),
    // "editorCommentsWidget.unresolvedBorder": alpha(foreground, "00"),

    // "editorCursor.background": null,
    "editorCursor.foreground": cursorText,

    // "editorError.background": null,
    // "editorError.border": null,
    "editorError.foreground": ansi.magenta,

    // "editorGhostText.background": null,
    // "editorGhostText.border": null,
    // "editorGhostText.foreground": alpha(brightForeground, "56"),

    "editorGroup.border": alphaB(ansi.black, 0.5),
    "editorGroup.dropBackground": alphaB(ansi.black, 0.5),
    "editorGroup.dropIntoPromptBackground": boxBackground,
    "editorGroup.dropIntoPromptBorder": none,
    "editorGroup.dropIntoPromptForeground": boxForeground,
    // "editorGroup.emptyBackground": null,
    // "editorGroup.focusedEmptyBorder": null,

    // "editorGroupHeader.border": null,
    // "editorGroupHeader.noTabsBackground": ansi.black,
    "editorGroupHeader.tabsBackground": background,
    // "editorGroupHeader.tabsBorder": "#282c35",

    "editorGutter.addedBackground": added,
    // "editorGutter.background": "#282c35",
    // "editorGutter.commentGlyphForeground": foreground,
    // "editorGutter.commentRangeForeground": "#2c313a",
    // "editorGutter.commentUnresolvedGlyphForeground": foreground,
    "editorGutter.deletedBackground": removed,
    // "editorGutter.foldingControlForeground": "#c5c5c5",
    // "editorGutter.modifiedBackground": ansi.blue,

    // "editorHint.border": null,
    // "editorHint.foreground": alpha("#eeeeee", "b3"),

    "editorHoverWidget.background": widgetBackground,
    "editorHoverWidget.border": widgetBorder,
    "editorHoverWidget.foreground": widgetForeground,
    "editorHoverWidget.highlightForeground": widgetHighlightForeground,
    "editorHoverWidget.statusBarBackground": widgetStatusBarBackground,

    // "editorIndentGuide.activeBackground1": "#3b4048",
    // "editorIndentGuide.activeBackground2": alpha("#000000", "00"),
    // "editorIndentGuide.activeBackground3": alpha("#000000", "00"),
    // "editorIndentGuide.activeBackground4": alpha("#000000", "00"),
    // "editorIndentGuide.activeBackground5": alpha("#000000", "00"),
    // "editorIndentGuide.activeBackground6": alpha("#000000", "00"),
    // "editorIndentGuide.background1": "#3b4048",
    // "editorIndentGuide.background2": alpha("#000000", "00"),
    // "editorIndentGuide.background3": alpha("#000000", "00"),
    // "editorIndentGuide.background4": alpha("#000000", "00"),
    // "editorIndentGuide.background5": alpha("#000000", "00"),
    // "editorIndentGuide.background6": alpha("#000000", "00"),

    // "editorInfo.background": null,
    // "editorInfo.border": null,
    "editorInfo.foreground": info,

    // "editorInlayHint.background": alphaB(ansi.black, 0.2),
    // "editorInlayHint.foreground": foreground,
    // "editorInlayHint.parameterBackground": alphaB(ansi.black, 0.2),
    // "editorInlayHint.parameterForeground": foreground,
    // "editorInlayHint.typeBackground": alphaB(ansi.black, 0.2),
    // "editorInlayHint.typeForeground": foreground,

    // "editorLightBulb.foreground": "#ffcc00",
    // "editorLightBulbAutoFix.foreground": "#75beff",

    "editorLineNumber.activeForeground": ansi.brightBlack,
    // "editorLineNumber.dimmedForeground": null,
    "editorLineNumber.foreground": ansi.black,

    // "editorLink.activeForeground": foreground,

    // "editorMarkerNavigation.background": background,
    // "editorMarkerNavigationError.background": error,
    // "editorMarkerNavigationError.headerBackground": alpha(error, "1a"),
    // "editorMarkerNavigationInfo.background": info,
    // "editorMarkerNavigationInfo.headerBackground": alpha(info, "1a"),
    // "editorMarkerNavigationWarning.background": warning,
    // "editorMarkerNavigationWarning.headerBackground": alpha(warning, "1a"),

    "editorOverviewRuler.addedForeground": added,
    // "editorOverviewRuler.background": null,
    // "editorOverviewRuler.border": ansi.brightBlack,
    // "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
    // "editorOverviewRuler.commentForeground": "#2c313a",
    // "editorOverviewRuler.commentUnresolvedForeground": "#2c313a",
    // "editorOverviewRuler.commonContentForeground": alphaB("#606060", 0.4),
    // "editorOverviewRuler.currentContentForeground": alphaB("#40c8ae", 0.5),
    "editorOverviewRuler.deletedForeground": removed,
    "editorOverviewRuler.errorForeground": error,
    // "editorOverviewRuler.findMatchForeground": alpha("#d18616", "7e"),
    // "editorOverviewRuler.incomingContentForeground": alphaB(added, 0.5),
    "editorOverviewRuler.infoForeground": info,
    // "editorOverviewRuler.modifiedForeground": alphaB(modified, 0.6),
    // "editorOverviewRuler.rangeHighlightForeground": alphaB("#007acc", 0.6),
    // "editorOverviewRuler.selectionHighlightForeground": alphaB("#a0a0a0", 0.8),
    "editorOverviewRuler.warningForeground": warning,
    // "editorOverviewRuler.wordHighlightForeground": alphaB("#a0a0a0", 0.8),
    // "editorOverviewRuler.wordHighlightStrongForeground": alphaB("#c0a0c0", 0.8),
    // "editorOverviewRuler.wordHighlightTextForeground": alphaB("#a0a0a0", 0.8),

    // "editorPane.background": ansi.black,

    "editorRuler.foreground": alphaB(ansi.cyan, 0.2),

    // "editorStickyScroll.background": ansi.black,
    // "editorStickyScrollHover.background": "#2a2d2e",

    // "editorSuggestWidget.background": background,
    // "editorSuggestWidget.border": "#181a1f",
    // "editorSuggestWidget.focusHighlightForeground": "#c5c5c5",
    // "editorSuggestWidget.foreground": foreground,
    // "editorSuggestWidget.highlightForeground": ansi.brightCyan,
    // "editorSuggestWidget.selectedBackground": "#2c313a",
    // "editorSuggestWidget.selectedForeground": foreground,
    // "editorSuggestWidget.selectedIconForeground": null,

    // "editorSuggestWidgetStatus.foreground": alphaB(foreground, 0.5),

    // "editorUnicodeHighlight.background": alpha("#bd9b03", "26"),
    // "editorUnicodeHighlight.border": "#bd9b03",

    // "editorUnnecessaryCode.border": null,
    // "editorUnnecessaryCode.opacity": alpha("#000000", "aa"),

    // "editorWarning.background": null,
    // "editorWarning.border": null,
    "editorWarning.foreground": warning,

    // "editorWhitespace.foreground": "#3b4048",

    "editorWidget.background": widgetBackground,
    "editorWidget.border": widgetBorder,
    "editorWidget.foreground": widgetForeground,
    // "editorWidget.resizeBorder": null,

    errorForeground: ansi.red,

    // "extensionBadge.remoteBackground": ansi.blue,
    // "extensionBadge.remoteForeground": "#f8fafd",

    // "extensionButton.background": "#404754",
    // "extensionButton.foreground": foreground,
    // "extensionButton.hoverBackground": "#5c6478",
    // "extensionButton.prominentBackground": ansi.blue,
    // "extensionButton.prominentForeground": foreground,
    // "extensionButton.prominentHoverBackground": ansi.blue,
    // "extensionButton.separator": alphaB(foreground, 0.4),

    // "extensionIcon.preReleaseForeground": "#1d9271",
    // "extensionIcon.sponsorForeground": "#d758b3",
    // "extensionIcon.starForeground": "#ff8e00",
    // "extensionIcon.verifiedForeground": ansi.cyan,

    focusBorder: alphaB(ansi.cyan, 0.6),

    foreground,

    "gitDecoration.addedResourceForeground": added,
    "gitDecoration.conflictingResourceForeground": error,
    "gitDecoration.deletedResourceForeground": removed,
    "gitDecoration.ignoredResourceForeground": ignored,
    "gitDecoration.modifiedResourceForeground": modified,
    // "gitDecoration.renamedResourceForeground": "#73c991",
    "gitDecoration.stageDeletedResourceForeground": alphaB(removed, 0.8),
    "gitDecoration.stageModifiedResourceForeground": alphaB(modified, 0.8),
    // "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": untracked,

    // "gitlens.closedAutolinkedIssueIconColor": "#a371f7",
    // "gitlens.closedPullRequestIconColor": "#f85149",
    "gitlens.decorations.addedForegroundColor": added,
    // "gitlens.decorations.branchAheadForegroundColor": "#35b15e",
    // "gitlens.decorations.branchBehindForegroundColor": "#b15e35",
    // "gitlens.decorations.branchDivergedForegroundColor": "#d8af1b",
    // "gitlens.decorations.branchMissingUpstreamForegroundColor": "#c74e39",
    // "gitlens.decorations.branchUnpublishedForegroundColor": "#35b15e",
    // "gitlens.decorations.branchUpToDateForegroundColor": "#64727f",
    "gitlens.decorations.copiedForegroundColor": added,
    "gitlens.decorations.deletedForegroundColor": removed,
    "gitlens.decorations.ignoredForegroundColor": alphaB(foreground, 0.4),
    "gitlens.decorations.modifiedForegroundColor": modified,
    // "gitlens.decorations.renamedForegroundColor": "#73c991",
    "gitlens.decorations.untrackedForegroundColor": untracked,
    // "gitlens.decorations.workspaceCurrentForegroundColor": "#35b15e",
    // "gitlens.decorations.workspaceRepoMissingForegroundColor": "#909090",
    // "gitlens.decorations.workspaceRepoOpenForegroundColor": "#35b15e",
    // "gitlens.decorations.worktreeHasUncommittedChangesForegroundColor": "#e2c08d",
    // "gitlens.decorations.worktreeMissingForegroundColor": "#c74e39",
    // "gitlens.graphChangesColumnAddedColor": "#347d39",
    // "gitlens.graphChangesColumnDeletedColor": "#c93c37",
    // "gitlens.graphLane1Color": "#15a0bf",
    // "gitlens.graphLane2Color": "#0669f7",
    // "gitlens.graphLane3Color": "#8e00c2",
    // "gitlens.graphLane4Color": "#c517b6",
    // "gitlens.graphLane5Color": "#d90171",
    // "gitlens.graphLane6Color": "#cd0101",
    // "gitlens.graphLane7Color": "#f25d2e",
    // "gitlens.graphLane8Color": "#f2ca33",
    // "gitlens.graphLane9Color": "#7bd938",
    // "gitlens.graphLane10Color": "#2ece9d",
    // "gitlens.graphMinimapMarkerHeadColor": "#05e617",
    // "gitlens.graphMinimapMarkerHighlightsColor": "#fbff0a",
    // "gitlens.graphMinimapMarkerLocalBranchesColor": "#3087cf",
    // "gitlens.graphMinimapMarkerRemoteBranchesColor": "#2b5e88",
    // "gitlens.graphMinimapMarkerStashesColor": "#b34db3",
    // "gitlens.graphMinimapMarkerTagsColor": "#6b562e",
    // "gitlens.graphMinimapMarkerUpstreamColor": "#09ae17",
    // "gitlens.graphScrollMarkerHeadColor": "#05e617",
    // "gitlens.graphScrollMarkerHighlightsColor": "#fbff0a",
    // "gitlens.graphScrollMarkerLocalBranchesColor": "#3087cf",
    // "gitlens.graphScrollMarkerRemoteBranchesColor": "#2b5e88",
    // "gitlens.graphScrollMarkerStashesColor": "#b34db3",
    // "gitlens.graphScrollMarkerTagsColor": "#6b562e",
    // "gitlens.graphScrollMarkerUpstreamColor": "#09ae17",
    // "gitlens.gutterBackgroundColor": alpha(brightForeground, "13"),
    // "gitlens.gutterForegroundColor": "#bebebe",
    // "gitlens.gutterUncommittedForegroundColor": alphaB("#00bcf2", 0.6),
    // "gitlens.lineHighlightBackgroundColor": alphaB("#00bcf2", 0.2),
    // "gitlens.lineHighlightOverviewRulerColor": alphaB("#00bcf2", 0.6),
    // "gitlens.mergedPullRequestIconColor": "#a371f7",
    // "gitlens.openAutolinkedIssueIconColor": "#3fb950",
    // "gitlens.openPullRequestIconColor": "#3fb950",
    // "gitlens.trailingLineBackgroundColor": alpha("#000000", "00"),
    // "gitlens.trailingLineForegroundColor": alpha("#999999", "59"),
    // "gitlens.unpublishedChangesIconColor": "#35b15e",
    // "gitlens.unpublishedCommitIconColor": "#35b15e",
    // "gitlens.unpulledChangesIconColor": "#b15e35",

    // "icon.foreground": "#c5c5c5",

    // "inlineChat.background": background,
    // "inlineChat.border": "#454545",
    // "inlineChat.regionHighlight": alphaB("#264f78", 0.2),
    // "inlineChat.shadow": "#282c35",

    "inlineChatDiff.inserted": alpha(added, 0.2),
    "inlineChatDiff.removed": alpha(removed, 0.2),

    // "inlineChatInput.background": "#1d1f23",
    // "inlineChatInput.border": "#454545",
    // "inlineChatInput.focusBorder": alpha(foreground, "00"),
    // "inlineChatInput.placeholderForeground": foreground,

    // TODO:
    // "input.background": "#1d1f23",
    // "input.border": alpha(foreground, "10"),
    // "input.foreground": foreground,
    // "input.placeholderForeground": foreground,

    // "inputOption.activeBackground": foreground,
    // "inputOption.activeBorder": ansi.blue,
    // "inputOption.activeForeground": brightForeground,
    // "inputOption.hoverBackground": alpha("#5a5d5e", 0.5),

    // "inputValidation.errorBackground": alpha(error, 0.2),
    // "inputValidation.errorBorder": error,
    // "inputValidation.errorForeground": null,
    // "inputValidation.infoBackground": alpha(info, 0.2),
    // "inputValidation.infoBorder": info,
    // "inputValidation.infoForeground": null,
    // "inputValidation.warningBackground": alpha(warning, 0.2),
    // "inputValidation.warningBorder": warning,
    // "inputValidation.warningForeground": null,

    // "interactive.activeCodeBorder": "#181a1f",
    // "interactive.inactiveCodeBorder": "#2c313a",

    // "issues.closed": "#cb2431",
    // "issues.newIssueDecoration": alpha(brightForeground, "48"),
    // "issues.open": "#3fb950",

    // "keybindingLabel.background": alpha("#808080", "2b"),
    // "keybindingLabel.border": alphaB("#333333", 0.6),
    // "keybindingLabel.bottomBorder": alphaB("#444444", 0.6),
    // "keybindingLabel.foreground": "#cccccc",

    // "keybindingTable.headerBackground": alpha(foreground, "0a"),
    // "keybindingTable.rowsBackground": alpha(foreground, "0a"),

    // TODO: sidebar / explorer lists:
    "list.activeSelectionBackground": ansi.black,
    "list.activeSelectionForeground": brightForeground,
    "list.activeSelectionIconForeground": none,
    // "list.deemphasizedForeground": "#8c8c8c",
    // "list.dropBackground": "#062f4a",
    "list.errorForeground": error,
    // "list.filterMatchBackground": "#314365",
    // "list.filterMatchBorder": null,
    // "list.focusAndSelectionOutline": null,
    "list.focusBackground": alphaB(ansi.black, 0.6),
    "list.focusForeground": foreground,
    // "list.focusHighlightForeground": "#c5c5c5",
    "list.focusOutline": none,
    // "list.highlightForeground": "#c5c5c5",
    "list.hoverBackground": alphaB(ansi.black, 0.4),
    "list.hoverForeground": foreground,
    "list.inactiveFocusBackground": alphaB(ansi.black, 0.4),
    "list.inactiveFocusOutline": none,
    "list.inactiveSelectionBackground": alphaB(ansi.black, 0.6),
    "list.inactiveSelectionForeground": foreground,
    "list.inactiveSelectionIconForeground": none,
    "list.invalidItemForeground": error,
    "list.warningForeground": warning,

    // "listFilterWidget.background": background,
    // "listFilterWidget.noMatchesOutline": "#be1100",
    // "listFilterWidget.outline": alpha("#000000", "00"),
    // "listFilterWidget.shadow": "#282c35",

    // "markdown.extension.editor.codeSpan.background": alpha("#000000", "00"),
    // "markdown.extension.editor.codeSpan.border": alphaB("#677696", 0.4),
    // "markdown.extension.editor.formattingMark.foreground": "#3b4048",
    // "markdown.extension.editor.trailingSpace.background": alphaB("#cccccc", 0.2),

    // TODO:
    // "menu.background": "#1d1f23",
    // "menu.border": null,
    // "menu.foreground": foreground,
    // "menu.selectionBackground": "#2c313a",
    // "menu.selectionBorder": null,
    // "menu.selectionForeground": foreground,
    // "menu.separatorBackground": "#606060",

    // "menubar.selectionBackground": alpha("#5a5d5e", "50"),
    // "menubar.selectionBorder": null,
    // "menubar.selectionForeground": "#9da5b4",

    // "merge.border": null,
    // "merge.commonContentBackground": alpha("#606060", "29"),
    // "merge.commonHeaderBackground": alphaB("#606060", 0.4),
    // "merge.currentContentBackground": alphaB("#40c8ae", 0.2),
    // "merge.currentHeaderBackground": alphaB("#40c8ae", 0.5),
    // "merge.incomingContentBackground": alphaB("#40a6ff", 0.2),
    // "merge.incomingHeaderBackground": alphaB("#40a6ff", 0.5),

    // "mergeEditor.change.background": alphaB("#9bb955", 0.2),
    // "mergeEditor.change.word.background": alphaB("#9ccc2c", 0.2),
    // "mergeEditor.changeBase.background": "#4b1818",
    // "mergeEditor.changeBase.word.background": "#6f1313",
    // "mergeEditor.conflict.handled.minimapOverViewRuler": alpha("#adaca8", "ee"),
    // "mergeEditor.conflict.handledFocused.border": alphaB("#c1c1c1", 0.8),
    // "mergeEditor.conflict.handledUnfocused.border": alpha("#868686", "49"),
    // "mergeEditor.conflict.input1.background": alphaB("#40c8ae", 0.2),
    // "mergeEditor.conflict.input2.background": alphaB("#40a6ff", 0.2),
    // "mergeEditor.conflict.unhandled.minimapOverViewRuler": "#fcba03",
    // "mergeEditor.conflict.unhandledFocused.border": "#ffa600",
    // "mergeEditor.conflict.unhandledUnfocused.border": alpha("#ffa600", "7a"),
    // "mergeEditor.conflictingLines.background": alpha("#ffea00", "47"),

    // "minimap.background": null,
    // "minimap.errorHighlight": alpha("#ff1212", "b3"),
    // "minimap.findMatchHighlight": "#d18616",
    // "minimap.foregroundOpacity": "#000000",
    // "minimap.selectionHighlight": "#264f78",
    // "minimap.selectionOccurrenceHighlight": "#676767",
    // "minimap.warningHighlight": warning,

    // "minimapGutter.addedBackground": added,
    // "minimapGutter.deletedBackground": ansi.magenta,
    // "minimapGutter.modifiedBackground": ansi.blue,
    // "minimapSlider.activeBackground": alphaB("#747d91", 0.2),
    // "minimapSlider.background": alphaB("#4e5666", 0.2),
    // "minimapSlider.hoverBackground": alphaB("#5a6375", 0.2),

    // "notebook.cellBorderColor": "#2c313a",
    // "notebook.cellEditorBackground": background,
    // "notebook.cellHoverBackground": null,
    // "notebook.cellInsertionIndicator": alpha(foreground, "00"),
    // "notebook.cellStatusBarItemHoverBackground": alpha(brightForeground, "26"),
    // "notebook.cellToolbarSeparator": alpha("#808080", "59"),
    // "notebook.editorBackground": ansi.black,
    // "notebook.focusedCellBackground": null,
    // "notebook.focusedCellBorder": alpha(foreground, "00"),
    // "notebook.focusedEditorBorder": alpha(foreground, "00"),
    // "notebook.inactiveFocusedCellBorder": "#2c313a",
    // "notebook.inactiveSelectedCellBorder": null,
    // "notebook.outputContainerBackgroundColor": null,
    // "notebook.outputContainerBorderColor": null,
    // "notebook.selectedCellBackground": "#2c313a",
    // "notebook.selectedCellBorder": "#2c313a",
    // "notebook.symbolHighlightBackground": alpha(brightForeground, "0b"),

    // "notebookEditorOverviewRuler.runningCellForeground": "#89d185",

    // "notebookScrollbarSlider.activeBackground": alphaB("#747d91", 0.5),
    // "notebookScrollbarSlider.background": alphaB("#4e5666", 0.5),
    // "notebookScrollbarSlider.hoverBackground": alphaB("#5a6375", 0.5),

    // "notebookStatusErrorIcon.foreground": ansi.red,
    // "notebookStatusRunningIcon.foreground": foreground,
    // "notebookStatusSuccessIcon.foreground": "#89d185",

    // "notificationCenter.border": null,

    // "notificationCenterHeader.background": "#2b3038",
    // "notificationCenterHeader.foreground": null,

    // "notificationLink.foreground": ansi.cyan,

    // "notifications.background": background,
    // "notifications.border": "#2b3038",
    // "notifications.foreground": foreground,

    // "notificationsErrorIcon.foreground": error,
    // "notificationsInfoIcon.foreground": info,
    // "notificationsWarningIcon.foreground": warning,

    // "notificationToast.border": null,

    // "panel.background": ansi.black,
    // "panel.border": ansi.brightBlack,
    // "panel.dropBorder": foreground,

    // "panelInput.border": alpha(foreground, "10"),

    // "panelSection.border": ansi.brightBlack,
    // "panelSection.dropBackground": alphaB("#53595d", 0.5),

    // "panelSectionHeader.background": alphaB("#808080", 0.2),
    // "panelSectionHeader.border": null,
    // "panelSectionHeader.foreground": null,

    // "panelTitle.activeBorder": foreground,
    // "panelTitle.activeForeground": foreground,
    // "panelTitle.inactiveForeground": foreground,

    // "peekView.border": "#181a1f",

    // "peekViewEditor.background": background,
    // "peekViewEditor.matchHighlightBackground": "#29244b",
    // "peekViewEditor.matchHighlightBorder": null,

    // "peekViewEditorGutter.background": background,
    // "peekViewEditorStickyScroll.background": background,

    // "peekViewResult.background": "#252526",
    // "peekViewResult.fileForeground": brightForeground,
    // "peekViewResult.lineForeground": "#bbbbbb",
    // "peekViewResult.matchHighlightBackground": alpha("#ea5c00", "4d"),
    // "peekViewResult.selectionBackground": alphaB("#3399ff", 0.2),
    // "peekViewResult.selectionForeground": brightForeground,

    // "peekViewTitle.background": "#252526",
    // "peekViewTitleDescription.foreground": alpha("#cccccc", "b3"),
    // "peekViewTitleLabel.foreground": brightForeground,

    // "pickerGroup.border": "#3f3f46",
    // "pickerGroup.foreground": ansi.cyan,

    // "ports.iconRunningProcessForeground": ansi.blue,

    "problemsErrorIcon.foreground": error,
    "problemsInfoIcon.foreground": info,
    "problemsWarningIcon.foreground": warning,

    // "profileBadge.background": "#4d4d4d",
    // "profileBadge.foreground": brightForeground,

    // "progressBar.background": ansi.cyan,

    // "pullRequests.closed": "#cb2431",
    // "pullRequests.draft": "#6e7681",
    // "pullRequests.merged": "#8957e5",
    // "pullRequests.notification": info,
    // "pullRequests.open": "#3fb950",

    // "quickInput.background": background,
    // "quickInput.foreground": foreground,

    // "quickInputList.focusBackground": "#2c313a",
    // "quickInputList.focusForeground": foreground,
    // "quickInputList.focusIconForeground": null,

    // "quickInputTitle.background": alpha(brightForeground, "1b"),

    // "sash.hoverBorder": alpha(foreground, "00"),

    // "scm.providerBorder": "#454545",

    // "scrollbar.shadow": "#282c35",

    // "scrollbarSlider.activeBackground": alphaB("#747d91", 0.5),
    // "scrollbarSlider.background": alphaB("#4e5666", 0.5),
    // "scrollbarSlider.hoverBackground": alphaB("#5a6375", 0.5),

    // "search.resultsInfoForeground": alpha(info, "a6"),

    // "searchEditor.findMatchBackground": alpha("#314365", "a8"),
    // "searchEditor.findMatchBorder": null,
    // "searchEditor.textInputBorder": alpha(foreground, "10"),

    "selection.background": selectionBackground,

    // "settings.checkboxBackground": ansi.black,
    // "settings.checkboxBorder": ansi.cyan,
    // "settings.checkboxForeground": ansi.cyan,
    // "settings.dropdownBackground": "#1d1f23",
    // "settings.dropdownBorder": "#181a1f",
    // "settings.dropdownForeground": foreground,
    // "settings.dropdownListBorder": "#454545",
    // "settings.focusedRowBackground": alphaB("#292d35", 0.6),
    // "settings.focusedRowBorder": alpha(foreground, "00"),
    // "settings.headerBorder": ansi.brightBlack,
    // "settings.headerForeground": ansi.cyan,
    // "settings.modifiedItemIndicator": ansi.yellow,
    // "settings.numberInputBackground": "#1d1f23",
    // "settings.numberInputBorder": alpha(foreground, "10"),
    // "settings.numberInputForeground": foreground,
    // "settings.rowHoverBackground": alpha("#292d35", "4d"),
    // "settings.sashBorder": ansi.brightBlack,
    // "settings.settingsHeaderHoverForeground": alpha(ansi.cyan, "b3"),
    // "settings.textInputBackground": "#1d1f23",
    // "settings.textInputBorder": alpha(foreground, "10"),
    // "settings.textInputForeground": foreground,

    "sideBar.background": background,
    // "sideBar.border": "#232830",
    // "sideBar.dropBackground": alphaB("#53595d", 0.5),
    "sideBar.foreground": alphaB(brightForeground, 0.6),

    "sideBarSectionHeader.background": background,
    // "sideBarSectionHeader.border": null,
    "sideBarSectionHeader.foreground": brightForeground,

    "sideBarTitle.foreground": foreground,

    // "sideBySideEditor.horizontalBorder": "#181a1f",
    // "sideBySideEditor.verticalBorder": "#181a1f",

    // Status Bar:
    "statusBar.background": background,
    "statusBar.foreground": ansi.brightBlack,
    "statusBar.border": none,
    // "statusBar.focusBorder": "#9da5b4",
    // - debugging:
    "statusBar.debuggingBackground": ansi.magenta,
    // "statusBar.debuggingForeground": brightForeground,
    // "statusBar.debuggingBorder": ansi.magenta,
    // - no folder (?):
    // "statusBar.noFolderBackground": background,
    // "statusBar.noFolderBorder": ansi.brightBlack,
    // "statusBar.noFolderForeground": "#9da5b4",
    // - offline:
    // "statusBar.offlineBackground": "#6c1717",
    // "statusBar.offlineForeground": "#f8fafd",

    "statusBarItem.activeBackground": brightForeground,
    // "statusBarItem.focusBorder": "#9da5b4",
    "statusBarItem.hoverBackground": ansi.darkBlack,
    // "statusBarItem.compactHoverBackground": alphaB(brightForeground, 0.2),
    // - prominent (?):
    // "statusBarItem.prominentBackground": alphaB("#000000", 0.5),
    // "statusBarItem.prominentForeground": "#9da5b4",
    // "statusBarItem.prominentHoverBackground": alpha("#000000", "4d"),
    // - remote (?):
    // "statusBarItem.remoteBackground": ansi.blue,
    // "statusBarItem.remoteForeground": "#f8fafd",
    // - statuses:
    "statusBarItem.errorBackground": error,
    "statusBarItem.errorForeground": brightForeground,
    "statusBarItem.warningBackground": warning,
    "statusBarItem.warningForeground": darkForeground,

    // "symbolIcon.arrayForeground": foreground,
    // "symbolIcon.booleanForeground": foreground,
    // "symbolIcon.classForeground": "#ee9d28",
    // "symbolIcon.colorForeground": foreground,
    // "symbolIcon.constantForeground": foreground,
    // "symbolIcon.constructorForeground": "#b180d7",
    // "symbolIcon.enumeratorForeground": "#ee9d28",
    // "symbolIcon.enumeratorMemberForeground": "#75beff",
    // "symbolIcon.eventForeground": "#ee9d28",
    // "symbolIcon.fieldForeground": "#75beff",
    // "symbolIcon.fileForeground": foreground,
    // "symbolIcon.folderForeground": foreground,
    // "symbolIcon.functionForeground": "#b180d7",
    // "symbolIcon.interfaceForeground": "#75beff",
    // "symbolIcon.keyForeground": foreground,
    // "symbolIcon.keywordForeground": foreground,
    // "symbolIcon.methodForeground": "#b180d7",
    // "symbolIcon.moduleForeground": foreground,
    // "symbolIcon.namespaceForeground": foreground,
    // "symbolIcon.nullForeground": foreground,
    // "symbolIcon.numberForeground": foreground,
    // "symbolIcon.objectForeground": foreground,
    // "symbolIcon.operatorForeground": foreground,
    // "symbolIcon.packageForeground": foreground,
    // "symbolIcon.propertyForeground": foreground,
    // "symbolIcon.referenceForeground": foreground,
    // "symbolIcon.snippetForeground": foreground,
    // "symbolIcon.stringForeground": foreground,
    // "symbolIcon.structForeground": foreground,
    // "symbolIcon.textForeground": foreground,
    // "symbolIcon.typeParameterForeground": foreground,
    // "symbolIcon.unitForeground": foreground,
    // "symbolIcon.variableForeground": "#75beff",

    "tab.activeBackground": ansi.darkBlack,
    // "tab.activeBorder": alphaB(ansi.blue, 0.4),
    // "tab.activeBorderTop": null,
    "tab.activeForeground": foreground,
    // "tab.activeModifiedBorder": "#3399cc",
    "tab.border": alphaB(ansi.blue, 0.4),
    "tab.hoverBackground": alphaB(ansi.blue, 0.5),
    // "tab.hoverBorder": null,
    "tab.hoverForeground": alphaB(brightForeground, 0.5),
    "tab.inactiveBackground": background,
    "tab.inactiveForeground": ansi.brightBlack, // alphaB(foreground, 0.75),
    // "tab.inactiveModifiedBorder": alphaB("#3399cc", 0.5),
    // "tab.lastPinnedBorder": "#585858",
    // "tab.unfocusedActiveBackground": "#2c313a",
    // "tab.unfocusedActiveBorder": ansi.brightBlack,
    // "tab.unfocusedActiveBorderTop": null,
    // "tab.unfocusedActiveForeground": alpha(ansi.cyan, "30"),
    // "tab.unfocusedActiveModifiedBorder": alphaB("#3399cc", 0.5),
    // "tab.unfocusedHoverBackground": alpha(ansi.blue, "18"),
    // "tab.unfocusedHoverBorder": null,
    // "tab.unfocusedHoverForeground": null,
    // "tab.unfocusedInactiveBackground": background,
    // "tab.unfocusedInactiveForeground": alphaB(foreground, 0.5),
    // "tab.unfocusedInactiveModifiedBorder": alphaB("#3399cc", 0.2),

    "terminal.ansiBlack": ansi.black,
    "terminal.ansiBlue": ansi.blue,
    "terminal.ansiCyan": ansi.cyan,
    "terminal.ansiGreen": ansi.green,
    "terminal.ansiMagenta": ansi.magenta,
    "terminal.ansiRed": ansi.red,
    "terminal.ansiWhite": ansi.white,
    "terminal.ansiYellow": ansi.yellow,
    "terminal.ansiBrightBlack": ansi.brightBlack,
    "terminal.ansiBrightBlue": ansi.brightBlue,
    "terminal.ansiBrightCyan": ansi.brightCyan,
    "terminal.ansiBrightGreen": ansi.brightGreen,
    "terminal.ansiBrightMagenta": ansi.brightMagenta,
    "terminal.ansiBrightRed": ansi.brightRed,
    "terminal.ansiBrightWhite": ansi.brightWhite,
    "terminal.ansiBrightYellow": ansi.brightYellow,
    "terminal.background": background,
    // "terminal.border": ansi.brightBlack,
    // "terminal.dropBackground": alphaB("#53595d", 0.5),
    // "terminal.findMatchBackground": alphaB(ansi.blue, 0.4),
    // "terminal.findMatchBorder": null,
    // "terminal.findMatchHighlightBackground": "#314365",
    // "terminal.findMatchHighlightBorder": null,
    "terminal.foreground": foreground,
    // "terminal.hoverHighlightBackground": alpha("#264f78", "20"),
    // "terminal.inactiveSelectionBackground": alpha("#677696", "30"),
    "terminal.selectionBackground": selectionBackground,
    "terminal.selectionForeground": selectionForeground,
    // "terminal.tab.activeBorder": alphaB(ansi.blue, 0.4),

    // "terminalCommandDecoration.defaultBackground": alphaB(brightForeground, 0.2),
    // "terminalCommandDecoration.errorBackground": "#f14c4c",
    // "terminalCommandDecoration.successBackground": "#1b81a8",

    // "terminalCursor.background": null,
    // "terminalCursor.foreground": null,

    // "terminalOverviewRuler.cursorForeground": alphaB("#a0a0a0", 0.8),
    // "terminalOverviewRuler.findMatchForeground": alpha("#d18616", "7e"),

    // "testing.iconErrored": error,
    // "testing.iconFailed": error,
    // "testing.iconPassed": success,
    // "testing.iconQueued": warning,
    // "testing.iconSkipped": disabled,
    // "testing.iconUnset": disabled,
    // "testing.message.error.decorationForeground": error,
    // "testing.message.error.lineBackground": alphaB(error, 0.2),
    // "testing.message.info.decorationForeground": alphaB(info, 0.5),
    // "testing.message.info.lineBackground": null,
    // "testing.peekBorder": ansi.magenta,
    // "testing.peekHeaderBackground": alpha(ansi.magenta, "1a"),
    // "testing.runAction": "#73c991",

    // "textBlockQuote.background": alpha("#7f7f7f", "1a"),
    // "textBlockQuote.border": alphaB("#007acc", 0.5),

    // "textCodeBlock.background": alphaB("#0a0a0a", 0.4),

    "textLink.activeForeground": ansi.brightCyan,
    "textLink.foreground": ansi.cyan,

    // "textPreformat.foreground": "#d7ba7d",

    // "textSeparator.foreground": alpha(brightForeground, "2e"),

    "titleBar.activeBackground": chroma
      .mix(background, ansi.green, 0.125, "lch")
      .hex(),
    "titleBar.activeForeground": ansi.brightGreen,
    "titleBar.border": none,
    // "titleBar.inactiveBackground": alphaB(ansi.black, 0.5),
    // "titleBar.inactiveForeground": "#6b717d",

    "toolbar.activeBackground": alphaB(ansi.red, 0.4),
    "toolbar.hoverBackground": alphaB(ansi.red, 0.2),
    "toolbar.hoverOutline": none,

    // "tree.inactiveIndentGuidesStroke": alphaB("#585858", 0.4),
    // "tree.indentGuidesStroke": "#585858",
    // "tree.tableColumnsBorder": alpha("#cccccc", "20"),
    // "tree.tableOddRowsBackground": alpha(foreground, "0a"),

    // "walkThrough.embeddedEditorBackground": alphaB("#000000", 0.4),
    // "walkthrough.stepTitle.foreground": brightForeground,

    "welcomePage.background": chroma
      .mix(background, ansi.black, 0.125, "lch")
      .hex(),
    "welcomePage.progress.background": ansi.black,
    "welcomePage.progress.foreground": ansi.cyan,
    // TODO: apply box styles
    "welcomePage.tileBackground": boxBackground,
    "welcomePage.tileBorder": boxBorder,
    "welcomePage.tileHoverBackground": boxHoverBackground,

    "widget.border": widgetBorder,
    "widget.shadow": widgetShadow,

    // "window.activeBorder": null,
    // "window.inactiveBorder": null,
  };
};
